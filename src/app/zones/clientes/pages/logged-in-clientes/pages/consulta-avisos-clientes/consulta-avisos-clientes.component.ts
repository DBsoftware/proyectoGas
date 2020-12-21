import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {MatDialog, MatOptionSelectionChange} from '@angular/material';
import {Observable} from 'rxjs';
import {CodigoSuscripcion} from '../../../../../../interfaces/codigo-suscripcion';
import {UserClientesService} from '../../../../services/user-clientes/user-clientes.service';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {AppConfig} from '../../../../../../config/app-config';
import {ClientesConfig} from '../../../../config/clientes-config';
import {ConsultaAvisosClientesService} from '../../../../services/logged-in/consulta-avisos-clientes/consulta-avisos-clientes.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-consulta-avisos-clientes',
  templateUrl: './consulta-avisos-clientes.component.html',
  styleUrls: ['./consulta-avisos-clientes.component.scss']
})
export class ConsultaAvisosClientesComponent implements OnInit {
  formConsultadeAvisos: FormGroup;
  codigoCliente$: Observable<CodigoSuscripcion[]>;
  radicadoPqr$: Observable<any>;
  recaptcha: string;
  textButton = 'CONSULTAR';
  userId: number;
  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private _user: UserClientesService,
              private _consultaAvisos: ConsultaAvisosClientesService,
              public _selects: SelectsService) {
    this.createForm();
  }

  ngOnInit() {
    this._user.getUserData()
      .subscribe(data => {
        this.userId = data.userId;
        this.codigoCliente$ = this._selects.getSuscriptionCodes(this.userId);
      });
  }
  createForm(): void {
    this.formConsultadeAvisos = this.fb.group({
      codigo_cliente: ['', [Validators.required]],
      radicado_pqr: [{value: '', disabled: true}, [Validators.required]],
      recaptcha: ['', [Validators.required]]
    });
  }
  codigoClienteChange(event: MatOptionSelectionChange) {
    if (event.source.value !== '') {

    this.radicadoPqr$ =  this._consultaAvisos.getRadicadoPqrwithClientCode(this.formConsultadeAvisos.get('codigo_cliente').value)
        .pipe(
          tap(data => {
          this.formConsultadeAvisos.get('radicado_pqr').setErrors({required: true});
          this.formConsultadeAvisos.get('radicado_pqr').enable();
        }));
    } else {
      this.formConsultadeAvisos.get('radicado_pqr').disable();
    }

  }

  recaptchaResolved(token: string) {
    this.recaptcha = token;
  }

  consultar() {
    this.dialog.open(DialogConfirmComponent,
      {
        data: {
          title: 'Confirmar transacción',
          content: '¿Confirma la consulta de del aviso?'
        }
      })
      .afterClosed()
      .subscribe(result => {
        if (result && this.formConsultadeAvisos.valid) {
          this.dialog.open(PdfViewerComponent, {
            minWidth: '90vw',
            minHeight: '68vh',
            data: {
              url: `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/pqrs/solved/documents`,
              code: this.formConsultadeAvisos.get('codigo_cliente').value
            }
          });
        }
      });
  }


}
