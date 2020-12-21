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
import {GnvSugerenciassService} from '../../../../services/no-logged/gnv-sugerencias/gnv-sugerenciass.service';
import {Registersuggestion} from '../../../../../../interfaces/registersuggestion';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-gnv-sugerencias-clientes',
  templateUrl: './gnv-sugerencias-clientes.component.html',
  styleUrls: ['./gnv-sugerencias-clientes.component.scss']
})
export class GnvSugerenciasClientesComponent implements OnInit {
  form: FormGroup;
  @ViewChild(FormGroupDirective) myNgForm;
  tipoIdentifacion$: Observable<TipoIdentificacionSelect[]>;
  idPolitic: number;
  idFilePolitic: number;
  textButton = 'GUARDAR';
  recaptcha: string;
  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private _selects: SelectsService,
              private _gnvSugerencias: GnvSugerenciassService,
              private _currentPolitic: CurrentPoliticService,
              public _loadingService: LoadingService) { }
  ngOnInit() {
    this.createForm();
    this.tipoIdentifacion$ = this._selects.getTipodeId();
  }
  createForm() {
    this.form = this.fb.group({
      tipo_identificacion: ['', [Validators.required]],
      identificacion: ['', [Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      nombre: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      nombre2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      apellido: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      apellido2: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      email: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
      telefono: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      celular: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      sugerencias: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      deseo_recibir: [false, []],
      autorizacion: ['', [Validators.requiredTrue]],
      recaptcha: ['', [Validators.required]]
    });
  }

  reciveIdPolitic(event) {
    this.idPolitic = event;
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
                   const form: Registersuggestion = {
                      formId: 11,
                      identificationType: this.form.get('tipo_identificacion').value,
                      identification: this.form.get('identificacion').value.toString(),
                      name1: this.form.get('nombre').value,
                      name2: this.form.get('nombre2').value,
                      lastName1: this.form.get('apellido').value,
                      lastName2: this.form.get('apellido2').value,
                      email: this.form.get('email').value,
                      phoneNumber: this.form.get('telefono').value,
                      mobile: this.form.get('celular').value.toString(),
                      sendEmailNotification: this.form.get('deseo_recibir').value,
                      suggestion: this.form.get('sugerencias').value,
                      politicId: this.idPolitic,
                      recaptchaToken: this.recaptcha
                    };
          this.textButton = 'GUARDANDO...';
          this.form.disable();
          this._gnvSugerencias.setSugerencia(form)
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
