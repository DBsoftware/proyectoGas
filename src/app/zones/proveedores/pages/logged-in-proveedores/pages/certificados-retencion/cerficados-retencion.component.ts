import { Component, OnInit } from '@angular/core';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {AppConfig} from '../../../../../../config/app-config';
import {ClientesConfig} from '../../../../../clientes/config/clientes-config';
import {CertificadosRetencionService} from '../../../../services/certificados-retencion/certificados-retencion.service';

@Component({
  selector: 'app-cerficados-retencion',
  templateUrl: './cerficados-retencion.component.html',
  styleUrls: ['./cerficados-retencion.component.scss']
})
export class CerficadosRetencionComponent implements OnInit {
  tipoIdentifacion$: Observable<any>;
  form: FormGroup;
  recaptcha: string;
  constructor(private _selects: SelectsService,
              public _loadingService: LoadingService,
              private dialog: MatDialog,
              private _certificados: CertificadosRetencionService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.tipoIdentifacion$ = this._selects.getTipodeId();
     this.form = this.fb.group({
       año: ['', [Validators.required]],
       certificado: ['', [Validators.required]],
       recaptcha: ['', [Validators.required]]
     });
  }
  recaptchaResolved(event) {
    this.recaptcha = event;
  }

  consultar() {
    if (this.form.valid) {
      this.dialog.open(PdfViewerComponent, {
        minWidth: '90vw',
        minHeight: '68vh',
        data: {
          url: `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/pqrs/solved/documents`,
          code: this.form.get('certificado').value
        }
      });
    }
  }

}
