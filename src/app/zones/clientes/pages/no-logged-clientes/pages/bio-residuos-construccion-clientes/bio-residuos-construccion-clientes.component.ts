import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {CurrentPoliticService} from '../../../../../../services/current-politic/current-politic.service';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {AppConfig} from '../../../../../../config/app-config';
import {ConfigAdmin} from '../../../../../administrador/config/config-admin';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {TipoNaturaleza} from '../../../../../../interfaces/tipo-naturaleza';
import {ResiduosDemolicion} from '../../../../../../interfaces/forms/residuos-demolicion';
import {BioDispocisionResiduosConstruccionService} from '../../../../services/no-logged/bio-dispocision-residuos-construccion/bio-dispocision-residuos-construccion.service';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-bio-residuos-construccion-clientes',
  templateUrl: './bio-residuos-construccion-clientes.component.html',
  styleUrls: ['./bio-residuos-construccion-clientes.component.scss']
})
export class BioResiduosConstruccionClientesComponent implements OnInit {
  @ViewChild(FormGroupDirective) myNgForm: FormGroupDirective;
  urlToUpload = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/asresource`;
  form: FormGroup;
  tipoNaturaleza$: Observable<TipoNaturaleza[]>;
  idPolitic: number;
  idFilePolitic: number;
  textButton = 'GUARDAR';
  recaptcha: string;
  reciveIdFiles = [];
  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private _selects: SelectsService,
              private _dispocison: BioDispocisionResiduosConstruccionService,
              private _currentPolitic: CurrentPoliticService,
              public _loadingService: LoadingService) { }
  ngOnInit() {
    this.createForm();
    this.tipoNaturaleza$ = this._selects.getTipoNaturaleza();
  }
  createForm() {
    this.form = this.fb.group({
      tipo_naturaleza: ['', [Validators.required]],
      identificacion: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      nombre: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      nombre2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      apellido: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      apellido2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      email: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
      telefono: ['', [Validators.required]],
      celular: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      deseo_recibir: ['', [Validators.requiredTrue]],
      adjuntos: ['', []],
      informacion_adicional: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      autorizacion: ['', [Validators.requiredTrue]],
      recaptcha: ['', [Validators.required]]
    });
  }

  reciveFiles(event) {
    this.reciveIdFiles = event;
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
          const form: ResiduosDemolicion = {
            formId: 14,
            typeNatureId: this.form.get('tipo_naturaleza').value,
            identification: this.form.get('identificacion').value.toString(),
            name1: this.form.get('nombre').value,
            name2: this.form.get('nombre2').value,
            lastName1: this.form.get('apellido').value,
            lastName2: this.form.get('apellido2').value,
            email: this.form.get('email').value,
            mobile: this.form.get('celular').value.toString(),
            phoneNumber: this.form.get('telefono').value.toString(),
            sendEmailNotification: this.form.get('deseo_recibir').value,
            aditionalInfo: this.form.get('informacion_adicional').value,
            filesId: this.reciveIdFiles,
            politicId: this.idPolitic,
            recaptchaToken: this.recaptcha
          };
          this.textButton = 'GUARDANDO...';
          this.form.disable();
           this._dispocison.setDispocisionResiduosConstruccion(form)
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

  reciveIdPolitic(event) {
    this.idPolitic = event;
  }

  succesDialog(message: string) {
    return this.dialog.open(SuccessDialogComponent, {
      data: {
        message: message,
      }
    });
  }
}
