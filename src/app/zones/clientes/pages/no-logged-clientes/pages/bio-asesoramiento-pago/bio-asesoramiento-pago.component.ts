import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {TipoIdentificacionSelect} from '../../../../../../interfaces/tipo-identificacion-select';
import {MatDialog} from '@angular/material';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {CurrentPoliticService} from '../../../../../../services/current-politic/current-politic.service';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {AppConfig} from '../../../../../../config/app-config';
import {ConfigAdmin} from '../../../../../administrador/config/config-admin';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {AsesoramientoPago} from '../../../../../../interfaces/forms/asesoramiento-pago';
import {BioAsesoramientoPagoService} from '../../../../services/no-logged/bio-asesoramiento-pago/bio-asesoramiento-pago.service';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-bio-asesoramiento-pago',
  templateUrl: './bio-asesoramiento-pago.component.html',
  styleUrls: ['./bio-asesoramiento-pago.component.scss']
})
export class BioAsesoramientoPagoComponent implements OnInit {
  @ViewChild(FormGroupDirective) myNgForm: FormGroupDirective;
  urlToUpload = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/asresource`;
  form: FormGroup;
  tipoIdentifacion$: Observable<TipoIdentificacionSelect[]>;
  idPolitic: number;
  idFilePolitic: number;
  textButton = 'GUARDAR';
  recaptcha: string;
  arrFiles: number[] = [];
  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private _selects: SelectsService,
              private _asesoramiento: BioAsesoramientoPagoService,
              private _currentPolitic: CurrentPoliticService,
              public _loadingService: LoadingService) { }
  ngOnInit() {
    this.createForm();
    this.tipoIdentifacion$ = this._selects.getTipodeId();
  }

  reciveIdPolitic(event) {
    this.idPolitic = event;
  }
  createForm() {
    this.form = this.fb.group({
      tipo_documento: ['', [Validators.required]],
      identificacion: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      nombre: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      nombre2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      apellido: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      apellido2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      email: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
      telefono: ['', [Validators.required]],
      celular: ['', [Validators.required, ]],
      deseo_recibir: [false, []],
      observaciones: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      adjuntos: ['', []],
      autorizacion: ['', [Validators.requiredTrue]],
      recaptcha: ['', [Validators.required]]
    });
  }


  recibeIdFiles(arr: number[]) {
    this.arrFiles = arr;
  }

  recaptchaResolved(event) {
    this.recaptcha = event;
  }
  guardar() {
    this.dialog.open(DialogConfirmComponent,
      {
        data: {
          title: 'Confirmar transacción',
          content: '¿Confirma la creación de la petición?'
        }
      })
      .afterClosed()
      .subscribe(result => {
        if (result && this.form.valid) {
                   const form: AsesoramientoPago = {
                      formId: 17,
                      identificationType: this.form.get('tipo_documento').value,
                      identification: this.form.get('identificacion').value.toString(),
                      name1: this.form.get('nombre').value,
                      name2: this.form.get('nombre2').value,
                      lastName1: this.form.get('apellido').value,
                      fileIds: this.arrFiles,
                      email: this.form.get('email').value,
                     sendEmailNotification: this.form.get('deseo_recibir').value,
                      lastName2: this.form.get('apellido2').value,
                      mobile: this.form.get('celular').value.toString(),
                      phoneNumber: this.form.get('telefono').value.toString(),
                      observations: this.form.get('observaciones').value,
                      politicId: this.idPolitic,
                      recaptchaToken: this.recaptcha
                    };
          this.textButton = 'GUARDANDO...';
          this.form.disable();
          this._asesoramiento.setAsesoramiento(form)
                 .subscribe(data => {
                   this.succesDialog(data.body.message);
                   this.myNgForm.resetForm();
                   this.form.enable();
                   this.textButton = 'GUARDAR';
                   console.log(data);
                 }, err => {
                   this.form.enable();
                   this.textButton = 'GUARDAR';
                 });
        }
      });
  }

  succesDialog(message: string) {
    return this.dialog.open(SuccessDialogComponent, {
      data: {
        message: message,
      }
    });
  }
}
