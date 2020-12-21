import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {CurrentPoliticService} from '../../../../../../services/current-politic/current-politic.service';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {Observable} from 'rxjs';
import {TipoIdentificacionSelect} from '../../../../../../interfaces/tipo-identificacion-select';
import {AppConfig} from '../../../../../../config/app-config';
import {ConfigAdmin} from '../../../../../administrador/config/config-admin';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {PosVentaClientesService} from '../../../../services/no-logged/post-venta-clientes/pos-venta-clientes.service';
import {PostVenta} from '../../../../../../interfaces/post-venta';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';
import {UserClientesService} from '../../../../services/user-clientes/user-clientes.service';
import {CodigoSuscripcion} from '../../../../../../interfaces/codigo-suscripcion';
import {AutoCompleteData} from '../../../../../../interfaces/auto-complete-data';
import {debounceTime, distinctUntilChanged, filter, switchMap} from 'rxjs/operators';
import {AutocompleteService} from '../../../../../../services/autocomplete/autocomplete.service';
import {ListPostVentaSelect} from '../../../../../../interfaces/list-post-venta-select';
import {Params} from '@angular/router';

@Component({
  selector: 'app-ventas-solicitud-postventa-clientes',
  templateUrl: './ventas-solicitud-postventa-clientes.component.html',
  styleUrls: ['./ventas-solicitud-postventa-clientes.component.scss']
})
export class VentasSolicitudPostventaClientesComponent implements OnInit {
  @ViewChild(FormGroupDirective) myNgForm;
  form: FormGroup;
  tipoIdentifacion$: Observable<TipoIdentificacionSelect[]>;
  codigoSuscription$: Observable<CodigoSuscripcion[]>;
  listPosventa$: Observable<ListPostVentaSelect[]>;
  idPolitic: number;
  idFilePolitic: number;
  textButton = 'GUARDAR';
  recaptcha: string;
  filteredMunicipio$: Observable<AutoCompleteData[]>;
  selectedMunicipioId: number | null;
  selectedMunicipioValue: string;

  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private _selects: SelectsService,
              private _autoComplete: AutocompleteService,
              private _user: UserClientesService,
              private _postVenta: PosVentaClientesService,
              private _currentPolitic: CurrentPoliticService,
              public _loadingService: LoadingService) {
  }

  ngOnInit() {
    this.createForm();
    this.tipoIdentifacion$ = this._selects.getTipodeId();
    this.listPosventa$ = this._selects.getPostVentaService();
    this._user.getUserData()
      .subscribe(user => {
        this.codigoSuscription$ = this._selects.getSuscriptionCodes(user.userId);
      });
    this.filteredMunicipio$ = this.form.get('ciudad').valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(100),
        filter(value => value !== null ),
        filter(value => value !== this.selectedMunicipioValue),
        filter(value => value.length > 2),
        switchMap(value => this.filter(value, `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/divpola/searchtownbydescription`, AppConfig.yParam)),
      );
  }

  reciveIdPolitic(event) {
    this.idPolitic = event;
  }

  createForm() {
    this.form = this.fb.group({
      codigo_suscription: ['', [Validators.required]],
      tipo_identificacion: ['', [Validators.required]],
      identificacion: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      ciudad: ['', [Validators.required]],
      tipo_servicio: ['', [Validators.required]],
      jornada: ['', [Validators.required]],
      datos_adicionales: ['', [Validators.required]],
      numero_persona_auto: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      recomendaciones: ['', [Validators.required]],
      nombre: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      nombre2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      apellido: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      apellido2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      email: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
      telefono: ['', []],
      celular: ['', [Validators.required]],
      deseo_recibir: [false, []],
      autorizacion: ['', [Validators.requiredTrue]],
      recaptcha: ['', [Validators.required]]
    });
  }


  filter(value: string, url: string, tokenAuxParam: Params) {
    return this._autoComplete.searchItem(value, url, tokenAuxParam);
  }

  checkInput(event: FocusEvent, input: string) {
    const element = <HTMLInputElement>event.srcElement;
    if (element.value.length > 2) {
      switch (input) {
        case 'municipio':
          const formControlmunicipio = this.form.get('ciudad');
          if (formControlmunicipio.value !== this.selectedMunicipioValue) {
            formControlmunicipio.setValue('');
            formControlmunicipio.setErrors({ requireMatchAutoComplete: true });
          }
          break;
      }
    }
  }

  selectedMunicipio(value: AutoCompleteData) {
    const formControlMunicipio = this.form.get('ciudad');
    if (value.id !== 404) {
      formControlMunicipio.setErrors(null);
      this.selectedMunicipioId = value.id;
      this.selectedMunicipioValue = value.description;
    } else {
      formControlMunicipio.setValue('');
    }
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
                  const form: PostVenta = {
                      formId: 10,
                      userSubscriptionCode: this.form.get('codigo_suscription').value,
                      identificationType: this.form.get('tipo_identificacion').value,
                      identification: this.form.get('identificacion').value.toString(),
                      cityId: this.selectedMunicipioId,
                      name1: this.form.get('nombre').value,
                      name2: this.form.get('nombre2').value,
                      lastName1: this.form.get('apellido').value,
                      lastName2: this.form.get('apellido2').value,
                      email: this.form.get('email').value,
                      mobile: this.form.get('celular').value.toString(),
                      phoneNumber: this.form.get('telefono').value.toString(),
                      sendEmailNotification: this.form.get('deseo_recibir').value,
                      servicesTypesIds: this.form.get('tipo_servicio').value,
                      workingDay: this.form.get('jornada').value,
                      extraData: this.form.get('datos_adicionales').value,
                      personInChargeAuthorizedPhoneNumber: this.form.get('numero_persona_auto').value,
                      recommendations: this.form.get('recomendaciones').value,
                      politicId: this.idPolitic,
                      recaptchaToken: this.recaptcha
                    };
          this.textButton = 'GUARDANDO...';
          this.form.disable();
           this._postVenta.requestServicePostVenta(form)
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
