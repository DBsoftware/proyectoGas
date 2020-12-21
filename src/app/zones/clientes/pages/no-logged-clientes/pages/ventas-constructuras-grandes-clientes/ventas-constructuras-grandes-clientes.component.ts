import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {Observable, of} from 'rxjs';
import {TipoIdentificacionSelect} from '../../../../../../interfaces/tipo-identificacion-select';
import {AppConfig} from '../../../../../../config/app-config';
import {ConfigAdmin} from '../../../../../administrador/config/config-admin';
import {CurrentPoliticService} from '../../../../../../services/current-politic/current-politic.service';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {MatAutocompleteSelectedEvent, MatCheckboxChange, MatDialog, MatStepper} from '@angular/material';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {AutoCompleteData} from '../../../../../../interfaces/auto-complete-data';
import {debounceTime, distinctUntilChanged, filter, switchMap} from 'rxjs/operators';
import {VentasSolicitudCetificadoMock} from '../../../../services/no-logged/ventas-solicitud-certificado-clientes/ventas-solicitud-cetificado-mock';
import {VentasConstructoras} from '../../../../../../interfaces/ventas-constructoras';
import {VentasConstructorasClientesService} from '../../../../services/no-logged/ventas-constructoras-clientes/ventas-constructoras-clientes.service';
import {AutocompleteService} from '../../../../../../services/autocomplete/autocomplete.service';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';
import {SolucionEnergetica} from '../../../../../../interfaces/solucion-energetica';
import {Params} from '@angular/router';

@Component({
  selector: 'app-ventas-constructuras-grandes-clientes',
  templateUrl: './ventas-constructuras-grandes-clientes.component.html',
  styleUrls: ['./ventas-constructuras-grandes-clientes.component.scss']
})
export class VentasConstructurasGrandesClientesComponent implements OnInit {
  @ViewChild('f') myNgForm: FormGroupDirective;
  @ViewChild('f2') myNgForm2: FormGroupDirective;
  @ViewChild('stepper') stepper: MatStepper;
  form: FormGroup;
  form2: FormGroup;
  tipoIdentifacion$: Observable<TipoIdentificacionSelect[]>;
  filteredMunicipio$: Observable<any>;
  solucionEnergetica$: Observable<SolucionEnergetica[]>;
  filteredState$: Observable<any>;
  idPolitic: number;
  idFilePolitic: number;
  idFiles: number[] = [];
  textButton1 = 'GUARDAR';
  recaptcha: string;
  selectedMunicipioId: number;
  selectedStateId: string;
  urlToUpload = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/asresource `;
  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              public _loading: LoadingService,
              private _currentPolitic: CurrentPoliticService,
              public _autoComplete: AutocompleteService,
              private _ventasConstructoras: VentasConstructorasClientesService,
              private _selects: SelectsService) {
  }

  ngOnInit() {
    this.tipoIdentifacion$ = this._selects.getTipodeId();
    this.createForm();
    this.filteredState$ = this._autoComplete.controlToFilter(
      this.form2.get('departamento'),
      `${AppConfig.API_DOMAIN}:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/divpola/searchdepartmentbydescription`,
      AppConfig.yParam);
    this._autoComplete.departmentSearched$
      .subscribe(searched => {
        if (searched) {
          this.filteredMunicipio$ = this._autoComplete.controlToFilter(
            this.form2.get('municipio'),
            `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/divpola/department/${ this._autoComplete.selectedStateCode }/towns/searchtownbydescription`,
            AppConfig.yParam);
        }
      });
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
      numero_telefonico: ['', [Validators.maxLength(7)]],
      celular: ['', [Validators.required, Validators.maxLength(10)]],
      notifiacion_correo: [false, []],
    });

    this.form2 = this.fb.group({
      nombre_proyecto: ['', [Validators.required]],
      departamento: ['', Validators.required],
      municipio: [{value: '', disabled: true}, Validators.required],
      direccion_ubicacion: ['', [Validators.required]],
      persona_acargo: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      numero_telefonico: ['', [Validators.maxLength(7), Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      celular: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      email: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
      estrato_asignado: ['', [Validators.required, Validators.max(6), Validators.min(1), Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      casas: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      apartamentos: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      numero_total_unidades_residen: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      numero_total_unidades_comericiales: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      numero_total_zonas_sociales: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      fecha_estimada_de_inicio_obra: [{value: '', disabled: true}, [Validators.required]],
      fecha_estimada_de_fin_obra: [{value: '', disabled: true}, [Validators.required]],
      adjuntos: ['', [Validators.required]],
      redes: [false, []],
      alarge_interno: [false, []],
      cargo_conexion: [false, []],
      cantidad_puntos: [false, []],
      input_cantidad_puntos: [{value: '', disabled: true}, []],
      asesoria_proyecto: [false, []],
      autorizacion: ['', [Validators.requiredTrue]],
      recaptcha: ['', [Validators.required]]
    });
  }

  reciveIdPolitic(event) {
    this.idPolitic = event;
  }




  reciveIdfiles(event: number[]) {
    this.idFiles = event;
  }
  recaptchaResolved(event) {
    this.recaptcha = event;
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
                   const form: VentasConstructoras = {
                      formId: 8,
                      identificationType: this.form.get('tipo_identificacion').value,
                      identification: this.form.get('identificacion_tributaria').value.toString(),
                      companyName: this.form.get('razon_social').value,
                      name1: this.form.get('representante_legal_nombre').value,
                      lastName1: this.form.get('representante_legal_apellido').value,
                      email: this.form.get('email').value,
                      phoneNumber: this.form.get('numero_telefonico').value.toString(),
                      mobile: this.form.get('celular').value.toString(),
                      sendEmailNotification: this.form.get('notifiacion_correo').value,
                      project: {
                        name: this.form2.get('nombre_proyecto').value,
                        departmentId: this._autoComplete.selectedStateId,
                        townId: this._autoComplete.selectedTownId,
                        address: this.form2.get('direccion_ubicacion').value,
                        personInChargeName: this.form2.get('persona_acargo').value,
                        email: this.form2.get('email').value,
                        phoneNumber: this.form2.get('numero_telefonico').value.toString(),
                        socioeconomicLevelId: this.form2.get('estrato_asignado').value,
                        residentialUnitsQuantity: this.form2.get('numero_total_unidades_residen').value,
                        housesQuantity: this.form2.get('casas').value,
                        apartamentsQuantity: this.form2.get('apartamentos').value,
                        unitComercialQuantity: this.form2.get('numero_total_unidades_comericiales').value,
                        socialZoneQuantity: this.form2.get('numero_total_zonas_sociales').value,
                        init: this.form2.get('fecha_estimada_de_inicio_obra').value,
                        end: this.form2.get('fecha_estimada_de_fin_obra').value,
                        requireNetwork: this.form2.get('redes').value,
                        requireInternalExtension: this.form2.get('alarge_interno').value,
                        requireAdvisory: this.form2.get('asesoria_proyecto').value,
                        connectionCharge: this.form2.get('cargo_conexion').value,
                        internalInstallation: this.form2.get('cantidad_puntos').value,
                        pointsQuantity: this.form2.get('input_cantidad_puntos').value
                      },
                      fileIds: this.idFiles,
                      politicId: this.idPolitic,
                      recaptchaToken: this.recaptcha
                    };
          this.textButton1 = 'GUARDANDO...';
          this.form.disable();
               this._ventasConstructoras.registrerGrandesConstructoras(form)
                 .subscribe(data => {
                   this.succesDialog(data.body.message);
                   this.myNgForm.resetForm();
                   this.myNgForm2.resetForm();
                   this.stepper.selectedIndex = 0;
                   this.form.enable();
                   this.textButton1 = 'GUARDAR';
                   console.log(data);
                 }, err => {
                   this.form.enable();
                   this.textButton1 = 'GUARDAR';
                 });
        }
      });
  }


  changeCheck(event: MatCheckboxChange) {
    if (event.checked) {
      this.form2.get('input_cantidad_puntos').enable();
      this.form2.get('input_cantidad_puntos').setValidators(Validators.required);
    } else {
      this.form2.get('input_cantidad_puntos').disable();
      this.form2.get('input_cantidad_puntos').setValidators(null);
    }
  }


  succesDialog(message: string) {
    return this.dialog.open(SuccessDialogComponent, {
      data: {
        message: message,
      }
    });
  }

}
