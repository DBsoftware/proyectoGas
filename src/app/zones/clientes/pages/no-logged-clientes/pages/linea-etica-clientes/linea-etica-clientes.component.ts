import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {DateAdapter, MatDialog, MatOptionSelectionChange, MatRadioChange} from '@angular/material';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {CurrentPoliticService} from '../../../../../../services/current-politic/current-politic.service';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {AppConfig} from '../../../../../../config/app-config';
import {ConfigAdmin} from '../../../../../administrador/config/config-admin';
import {Observable} from 'rxjs';
import {TipoIdentificacionSelect} from '../../../../../../interfaces/tipo-identificacion-select';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {LineaEticaClientesService} from '../../../../services/no-logged/linea-etica-clientes/linea-etica-clientes.service';
import {LineaEtica} from '../../../../../../interfaces/linea-etica';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';
import {GrupoInteres} from '../../../../../../interfaces/grupo-interes';

@Component({
  selector: 'app-linea-etica-clientes',
  templateUrl: './linea-etica-clientes.component.html',
  styleUrls: ['./linea-etica-clientes.component.scss']
})
export class LineaEticaClientesComponent implements OnInit {
  @ViewChild(FormGroupDirective) myNgForm: FormGroupDirective;
  form: FormGroup;
  tipoIdentifacion$: Observable<TipoIdentificacionSelect[]>;
  tiempoSucediendo$: Observable<any>;
  grupodeInteres$: Observable<GrupoInteres[]>;
  idPolitic: number;
  idFilePolitic: number;
  textButton = 'GUARDAR';
  recaptcha: string;
  filesId: number[] = [];
  selectedInteresGroupId: number;
  selectedTimeId: number;
  urlToUpload = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/asresource`;
  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private adapter: DateAdapter<Date>,
              private _selects: SelectsService,
              private _currentPolitic: CurrentPoliticService,
              private _lineaEtica: LineaEticaClientesService,
              public _loadingService: LoadingService) {
    this.adapter.setLocale('co');
  }


  reciveIdPolitic(event) {
    this.idPolitic = event;
  }

  ngOnInit() {
    this.createForm();
    this.tipoIdentifacion$ = this._selects.getTipodeId();
    this.tiempoSucediendo$ = this._selects.tiempoSucediendo();
    this.grupodeInteres$ = this._selects.getGrupoDeInteres();
  }

  createForm() {
    this.form = this.fb.group({
      novedad: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      fecha_ocurrido: [{value: '', disabled: true}, [Validators.required]],
      lugar_hechos: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      tiempo_sucediendo: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      tiempo_sucediendo_select: ['', [Validators.required]],
      radio_conocimiento_empresa: ['', [Validators.required]],
      nombres_personas_concimento_empresa: [{value: '', disabled: true}, [Validators.required]],
      adjuntos: ['', []],
      radio_desea_registrar_datos: ['', [Validators.required]],
      cliente_nombre: [{value: '', disabled: true}, [Validators.required]],
      cliente_nombre2: [{value: '', disabled: true}, []],
      cliente_apellido: [{value: '', disabled: true}, [Validators.required]],
      cliente_apellido2: [{value: '', disabled: true}, []],
      telefono: [{value: '', disabled: true}, [Validators.required]],
      grupo_interes: [{value: '', disabled: true}, [Validators.required]],
      otro_grupo: [{value: '', disabled: true}, [Validators.required]],
      correo: [{value: '', disabled: true}, [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
      autorizacion: ['', [Validators.requiredTrue]],
      recaptcha: ['', [Validators.required]]
    });
  }


  timeSelection(option) {
    this.selectedTimeId = option.id;
  }
  grupoInteresSelect(option) {
    this.selectedInteresGroupId = option.id;
    if (option.description === 'Otros') {
      this.form.get('otro_grupo').enable();
    } else {
      this.form.get('otro_grupo').disable();
      this.form.get('otro_grupo').setValue('');
    }
  }

  recaptchaResolved(event) {
    this.recaptcha = event;
  }

  reciveIdFiles(arrId: number[]) {
    this.filesId = arrId;
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
                  const form: LineaEtica = {
                      formId: 12,
                      strangeness: this.form.get('novedad').value,
                      strangenessDate: this.form.get('fecha_ocurrido').value,
                      thePlaceOfScene: this.form.get('lugar_hechos').value,
                   //   knowTheNameOfInvolvedPeople: this.form.get('radio_involucrados').value,
                    //  nameOfInvolvedPeople: this.form.get('nombres_involucrados').value,
                      strangenessTime: this.form.get('tiempo_sucediendo').value,
                      companyKnows: this.form.get('radio_conocimiento_empresa').value,
                      peopleNameInCompany: this.form.get('nombres_personas_concimento_empresa').value,
                      fileIds: this.filesId,
                      wantRegisterData: this.form.get('radio_desea_registrar_datos').value,
                      customerName1: this.form.get('cliente_nombre').value.toString(),
                      customerName2: this.form.get('cliente_nombre2').value.toString(),
                      customerlastName1:  this.form.get('cliente_apellido').value,
                      customerlastName2: this.form.get('cliente_apellido2').value,
                      phoneNumber: this.form.get('telefono').value.toString(),
                      interestGroupId: this.selectedInteresGroupId,
                      otherGroup: this.form.get('otro_grupo').value,
                      timeUnitId: this.selectedTimeId,
                      email: this.form.get('correo').value,
                      politicId: this.idPolitic,
                      recaptchaToken: this.recaptcha
                    };
          this._lineaEtica.setPoltitica(form);
          this.textButton = 'GUARDANDO...';
           this._lineaEtica.setPoltitica(form)
                 .subscribe(data => {
                   this.succesDialog(data.body.message);
                   this.myNgForm.resetForm();
                   this.textButton = 'GUARDAR';
                   console.log(data);
                 }, err => {
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

  toogleFormControlSpanish(abstractControl: AbstractControl, event: MatRadioChange) {
    if (event.value === 'SI') {
      abstractControl.enable();
      abstractControl.setValidators([Validators.required]);
      abstractControl.setErrors({required: true});
      abstractControl.markAsTouched();
    } else {
      abstractControl.disable();
      abstractControl.setValidators(null);
      abstractControl.setErrors(null);
      abstractControl.setValue('');
    }
  }

  toogleMultipleFormControlSpanish(event: MatRadioChange) {
    const arrayControls: AbstractControl[] = [];
    arrayControls.push(
      this.form.get('cliente_nombre'),
    this.form.get('cliente_nombre2'),
    this.form.get('cliente_apellido'),
    this.form.get('cliente_apellido2'),
    this.form.get('telefono'),
      this.form.get('correo'),
      this.form.get('grupo_interes'));
    if (event.value === 'SI') {
      for (const control of arrayControls) {
        control.enable();
        control.setValidators([Validators.required]);
        if (control !== arrayControls[1]  &&  control !== arrayControls[3])  {
          control.setErrors({required: true});
        }
        if (control === arrayControls[5]) {
          control.setValidators([Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]);
        }
        control.markAsTouched();
      }
    } else {
      for (const control of arrayControls) {
          control.disable();
          control.setValidators(null);
          control.setValue('');
      }
    }
  }

}
