import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {CodigoSuscripcion} from '../../../../../../interfaces/codigo-suscripcion';
import {MatDialog, MatOptionSelectionChange} from '@angular/material';
import {UserClientesService} from '../../../../services/user-clientes/user-clientes.service';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {AppConfig} from '../../../../../../config/app-config';
import {ClientesConfig} from '../../../../config/clientes-config';
import {DownloadService} from '../../../../../../services/download/download.service';
import {last, tap} from 'rxjs/operators';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {InfoDialogComponent} from '../../../../../../shared/info-dialog/info-dialog.component';
import {IpService} from '../../../../../../services/ip/ip.service';

@Component({
  selector: 'app-consulta-factura-clientes',
  templateUrl: './consulta-factura-clientes.component.html',
  styleUrls: ['./consulta-factura-clientes.component.scss']
})
export class ConsultaFacturaClientesComponent implements OnInit {
  @ViewChild(FormGroupDirective) myNgForm;
  form: FormGroup;
  recaptcha: string;
  tipoSuscripcion$: Observable<CodigoSuscripcion[]>;
  userId: number;
  formdisable = false;
  idCodigo: string;
  rawFile;
  myIp: string;
  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              public _loading: LoadingService,
              private _download: DownloadService,
              private _user: UserClientesService,
              private _ip: IpService,
              public _selects: SelectsService) {
  }

  ngOnInit() {
    this._ip.getIp()
      .subscribe(ip => {
        this.myIp = ip;
      });
    this.createForm();
    this._user.getUserData()
      .subscribe(data => {
        this.userId = data.userId;
        this.tipoSuscripcion$ = this._selects.getSuscriptionCodes(data.userId)
          .pipe(
            tap()
          );
      }, err => {
        this.form.disable();
        this.formdisable = true;
      });
  }


  createForm(): void {
    this.form = this.fb.group({
      codigo_cliente: ['', [Validators.required]],
      recaptcha: ['', [Validators.required]]
    });
  }

  recaptchaResolved(token: string) {
    this.recaptcha = token;
  }

  selectionOnchange(event: MatOptionSelectionChange) {
    this.idCodigo = event.source.value;
  }

  consultar() {
    this.dialog.open(DialogConfirmComponent, {
        data: {
          title: 'Confirmación de la transacción',
          content: '¿Confirma consultar el duplicado de la factura?'
        }
      }
    ).afterClosed()
      .subscribe(result => {
        if (result) {
          // const numberQuemado = '0104932632200';
          this._download.downloadFactura(this.form.get('codigo_cliente').value, AppConfig.COMPANY_ID.toString(), this.myIp)
            .pipe(
              last()
            )
            .subscribe(data => {
              if (typeof data === 'string') {
                this.infoDialog('No es posible descargar el PDF', [{defaultMessage: 'No existe una factura para este código de suscripción'}]);
              } else {
                const reader = new FileReader();
                reader.addEventListener('load', () => {
                  this._download.doDownloadManual(this.rawFile, 'recibo llanogas.pdf');
                }, false);
                if (data.body !== undefined) {
                  this.rawFile = data.body;
                  reader.readAsDataURL(data.body);
                }
              }
              }, err => {
              console.log(err);
            });
        }
      });
  }
  infoDialog(title: string, content: any) {
    this.dialog.open(InfoDialogComponent, {
      data: {
        title: title,
        content: content
      }
    });
  }
}
