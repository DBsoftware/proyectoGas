import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {TipoIdentificacionSelect} from '../../../../../../interfaces/tipo-identificacion-select';
import {AutoCompleteData} from '../../../../../../interfaces/auto-complete-data';
import {debounceTime, distinctUntilChanged, filter, switchMap} from 'rxjs/operators';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {DateAdapter, MatAutocompleteSelectedEvent, MatDialog} from '@angular/material';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {CurrentPoliticService} from '../../../../../../services/current-politic/current-politic.service';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {AppConfig} from '../../../../../../config/app-config';
import {ConfigAdmin} from '../../../../../administrador/config/config-admin';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {AutocompleteService} from '../../../../../../services/autocomplete/autocomplete.service';
import {NetworkExpansion} from '../../../../../../interfaces/forms/network-expansion';
import {ExpansionRedesService} from '../../../../services/no-logged/expansion-redes-clientes/expansion-redes.service';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';
import {Params} from '@angular/router';

@Component({
  selector: 'app-ventas-solicitud-expansion-clientes',
  templateUrl: './ventas-solicitud-expansion-clientes.component.html',
  styleUrls: ['./ventas-solicitud-expansion-clientes.component.scss']
})
export class VentasSolicitudExpansionClientesComponent implements OnInit {
  @ViewChild(FormGroupDirective) myNgForm;
  form: FormGroup;
  idFiles: number[] = [];
  urlToUpload = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/asresource`;
  recaptcha: string;
  idPolitic: number;
  idFilePolitic: number;
  textButton = 'GUARDAR';
  tipoIdentifacion$: Observable<TipoIdentificacionSelect[]>;
  filteredMunicipio$: Observable<AutoCompleteData[]>;
  filteredState$: Observable<AutoCompleteData[]>;

  constructor(private fb: FormBuilder,
              public _loadingService: LoadingService,
              private adapter: DateAdapter<Date>,
              private _selects: SelectsService,
              private _expansion: ExpansionRedesService,
              private _currentPolitic: CurrentPoliticService,
              public _autoComplete: AutocompleteService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.createForm();
    this.tipoIdentifacion$ = this._selects.getTipodeId();
    this.filteredState$ = this._autoComplete.controlToFilter(
      this.form.get('departamento'),
      `${AppConfig.API_DOMAIN}:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/divpola/searchdepartmentbydescription`,
      AppConfig.yParam);
    this._autoComplete.departmentSearched$
      .subscribe(searched => {
        if (searched) {
          this.filteredMunicipio$ = this._autoComplete.controlToFilter(
            this.form.get('municipio'),
            `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/divpola/department/${ this._autoComplete.selectedStateCode }/towns/searchtownbydescription`,
            AppConfig.yParam);
        }
      });
  }

  reciveIdPolitic(event) {
    this.idPolitic = event;
  }

  createForm() {
    this.form = this.fb.group({
      tipo_identificacion: ['', [Validators.required]],
      identificacion: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      nombre: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      nombre2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      apellido: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      apellido2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      email: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
      telefono: ['', [Validators.maxLength(7)]],
      celular: ['', [Validators.maxLength(10)]],
      deseo_recibir: [false, []],
      direccion_predio: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      municipio: [{value: '', disabled: true}, [Validators.required]],
      adjuntos: ['', Validators.required],
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
                   const form: NetworkExpansion = {
                      formId: 5,
                      identificationType: this.form.get('tipo_identificacion').value,
                      identification: this.form.get('identificacion').value.toString(),
                      name1: this.form.get('nombre').value,
                      name2: this.form.get('nombre2').value,
                      lastName1: this.form.get('apellido').value,
                      lastName2: this.form.get('apellido2').value,
                      email: this.form.get('email').value,
                      mobile: this.form.get('telefono').value,
                      phoneNumber: this.form.get('celular').value,
                      sendEmailNotification: this.form.get('deseo_recibir').value,
                      pieceOfGround: {
                        address: this.form.get('direccion_predio').value,
                        departamentId: this._autoComplete.selectedStateId,
                        townId: this._autoComplete.selectedTownId
                      },
                      fileIds: this.idFiles,
                      politicId: this.idPolitic,
                      recaptchaToken: this.recaptcha
                    };
          this.textButton = 'GUARDANDO...';
          this.form.disable();
             this._expansion.solicitudExpansion(form)
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
