import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {MatDialog} from '@angular/material';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {Observable} from 'rxjs';
import {CodigoSuscripcion} from '../../../../../../interfaces/codigo-suscripcion';
import {UserClientesService} from '../../../../services/user-clientes/user-clientes.service';
import {AppConfig} from '../../../../../../config/app-config';
import {ClientesConfig} from '../../../../config/clientes-config';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {IpService} from '../../../../../../services/ip/ip.service';
import {DownloadService} from '../../../../../../services/download/download.service';
import {Moment} from 'moment';
import * as moment from 'moment';
import {last} from 'rxjs/operators';

@Component({
  selector: 'app-estado-de-financiacion-clientes',
  templateUrl: './estado-de-financiacion-clientes.component.html',
  styleUrls: ['./estado-de-financiacion-clientes.component.scss']
})
export class EstadoDeFinanciacionClientesComponent implements OnInit {

  @ViewChild(FormGroupDirective) myNgForm;
  formEstadoDeFinanciacion: FormGroup;
  recaptcha: string;
  tipoSuscripcion$: Observable<CodigoSuscripcion[]>;
  userId: string;
  formdisable = false;
  userIp: string;
  useName: string;
  rawFile: any;

  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              public _loading: LoadingService,
              private _ip: IpService,
              private _download: DownloadService,
              private _user: UserClientesService,
              public _selects: SelectsService) {
  }

  ngOnInit() {
    this._ip.getIp()
      .subscribe(ip => {
        this.userIp = ip;
      });
    this.createForm();
    this._user.getUserData()
      .subscribe(data => {
        this.userId = data.userId.toString();
        this.useName = `${ data.name1 } ${ data.name2 } ${ data.lastName1 } ${ data.lastName2 }`;
        this.tipoSuscripcion$ = this._selects.getSuscriptionCodes(data.userId);
      }, err => {
        this.formEstadoDeFinanciacion.disable();
        this.formdisable = true;
      });
  }

  createForm(): void {
    this.formEstadoDeFinanciacion = this.fb.group({
      codigo_cliente: ['', [Validators.required]],
      start_at: ['', [Validators.required]],
      end_at: ['', [Validators.required]],
      recaptcha: ['', [Validators.required]]
    });
  }

  recaptchaResolved(token: string) {
    this.recaptcha = token;
  }

  consultar() {
    this.dialog.open(DialogConfirmComponent, {
      data: {
        title: 'Confirmación de la transacción',
        content: '¿Confirma consultar el estado de la cuenta de financiación?'
      }}
    ).afterClosed()
      .subscribe(result => {
        const fechaInit = moment(this.formEstadoDeFinanciacion.get('start_at').value);
        const fechaEnd = moment(this.formEstadoDeFinanciacion.get('end_at').value);
        if (result && this.formEstadoDeFinanciacion.valid) {
          this._download.downloaFacturaEstadoCuentaFinanciacion(
            this.userIp,
            this.formEstadoDeFinanciacion.get('codigo_cliente').value,
            this.userId,
            this.useName,
            fechaInit.format('YYYY-MM-DD'),
            fechaEnd.format('YYYY-MM-DD')
          ).pipe(
            last()
          ).subscribe(factura => {
            if (factura) {
              const reader = new FileReader();
              reader.addEventListener('load', () => {
                this._download.doDownloadManual(this.rawFile, 'reporte de estado de cuenta.pdf');
              }, false);
              this.rawFile = factura;
              reader.readAsDataURL(factura);
            }
          });
          /** this.dialog.open(PdfViewerComponent, {
            minWidth: '90vw',
            minHeight: '68vh',
            data: {
              url: `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/user/${ this.userId }/bioaccount/status`,
              code: this.formEstadoDeFinanciacion.get('codigo_cliente').value
            }
          }); **/
        }
      });
  }

}
