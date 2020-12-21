import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {DateAdapter, MatDialog} from '@angular/material';
import {AppConfig} from '../../../../../../config/app-config';
import {ConfigAdmin} from '../../../../../administrador/config/config-admin';
import {CurrentPoliticService} from '../../../../../../services/current-politic/current-politic.service';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {Observable} from 'rxjs';
import {TipoIdentificacionSelect} from '../../../../../../interfaces/tipo-identificacion-select';
import {AutoCompleteData} from '../../../../../../interfaces/auto-complete-data';
import {VentasSolicitudCetificadoClientesService} from '../../../../services/no-logged/ventas-solicitud-certificado-clientes/ventas-solicitud-cetificado-clientes.service';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {AutocompleteService} from '../../../../../../services/autocomplete/autocomplete.service';
import {CertificadoDisponibilidad} from '../../../../../../interfaces/forms/certificado-disponibilidad';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-ventas-solicitud-certificado-clientes',
  templateUrl: './ventas-solicitud-certificado-clientes.component.html',
  styleUrls: ['./ventas-solicitud-certificado-clientes.component.scss'],
})
export class VentasSolicitudCertificadoClientesComponent implements OnInit {
  @ViewChild(FormGroupDirective) myNgForm;
  form: FormGroup;
  idFiles: number[] = [];
  recaptcha: string;
  idPolitic: number;
  idFilePolitic: number;
  textButton = 'GUARDAR';
  tipoIdentifacion$: Observable<TipoIdentificacionSelect[]>;
  filteredMunicipio$: Observable<AutoCompleteData[]>;
  urlToUpload = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/asresource`;


  constructor(private fb: FormBuilder,
              public _loadingService: LoadingService,
              private adapter: DateAdapter<Date>,
              private _selects: SelectsService,
              private _solicitud: VentasSolicitudCetificadoClientesService,
              private _currentPolitic: CurrentPoliticService,
              public _autoComplete: AutocompleteService,
              private dialog: MatDialog) {
    this.adapter.setLocale('co');

  }

  reciveIdPolitic(event) {
    this.idPolitic = event;
  }

  ngOnInit() {
      this.tipoIdentifacion$ = this._selects.getTipodeId();
      this.createForm();
      const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/politic/current`;
      this._currentPolitic.getCurrentPolitic(url)
        .subscribe(data => {
          this.idPolitic = data.id;
          this.idFilePolitic = data.fileId;
        }, err => {
          this.textButton = 'GUARDAR';
          this.form.disable();
          console.error('No es posible recuperar la política activa');
        });
    this.filteredMunicipio$ =  this._autoComplete.controlToFilter(
      this.form.get('municipio'),
      `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/divpola/searchtownbydescription`,
      AppConfig.yParam);
  }
  createForm() {
    this.form = this.fb.group({
      tipo_identificacion: ['', [Validators.required]],
      identificacion_tributaria: ['', [Validators.required]],
      razon_social: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      representante_legal_nombre: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      representante_legal_nombre2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      representante_legal_apellido: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      representante_legal_apellido2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      email: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
      numero_telefonico: ['', [Validators.required]],
      notifiacion_correo: [false, []],
      nombre_proyecto: ['', [Validators.required]],
      municipio: ['', Validators.required],
      direccion_ubicacion: ['', [Validators.required]],
      persona_acargo: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      estrato_asignado: ['', [Validators.required, Validators.max(6), Validators.min(1), Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      numero_catrastal: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      numero_matricula_inmo: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      numero_total_unidades_residen: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      casas: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      apartamentos: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      numero_total_unidades_comericiales: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      numero_total_zonas_sociales: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      fecha_estimada_de_inicio_obra: [{value: '', disabled: true}, [Validators.required]],
      fecha_estimada_de_fin_obra: [{value: '', disabled: true}, [Validators.required]],
      adjuntos: ['', [Validators.required]],
      autorizacion: ['', [Validators.requiredTrue]],
      recaptcha: ['', [Validators.required]]
    });
  }





  recaptchaResolved(event) {
    this.recaptcha = event;
  }

  reciveIdfiles(files: number[]) {
    this.idFiles = files;
  }



  consultar() {
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
          const form: CertificadoDisponibilidad = {
            formId: 4,
            identificationType: this.form.get('tipo_identificacion').value,
            identification: this.form.get('identificacion_tributaria').value.toString(),
            companyName: this.form.get('razon_social').value,
            name1: this.form.get('representante_legal_nombre').value,
            lastName1: this.form.get('representante_legal_apellido').value,
            email: this.form.get('email').value,
            phoneNumber: this.form.get('numero_telefonico').value.toString(),
            sendEmailNotification: this.form.get('notifiacion_correo').value,
            project: {
              name:  this.form.get('nombre_proyecto').value,
              townId:  this._autoComplete.selectedTownId,
              address: this.form.get('direccion_ubicacion').value,
              personInChargeName: this.form.get('persona_acargo').value,
              socioeconomicLevelId: this.form.get('estrato_asignado').value,
              cadastralNumber: this.form.get('numero_catrastal').value,
              numberOfRealEstateRegistration: this.form.get('numero_matricula_inmo').value,
              residentialUnitsQuantity:  this.form.get('numero_total_unidades_residen').value,
              housesQuantity: this.form.get('casas').value,
              apartamentsQuantity: this.form.get('apartamentos').value,
              unitComercialQuantity: this.form.get('numero_total_unidades_comericiales').value,
              socialZoneQuantity: this.form.get('numero_total_zonas_sociales').value,
              init: this.form.get('fecha_estimada_de_inicio_obra').value,
              end: this.form.get('fecha_estimada_de_fin_obra').value
            },
            fileIds: this.idFiles,
            politicId: this.idFilePolitic,
            recaptchaToken: this.recaptcha
          };
          this.textButton = 'GUARDANDO...';
          this.form.disable();
         this._solicitud.setVentasSolicitudCertificado(form)
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
