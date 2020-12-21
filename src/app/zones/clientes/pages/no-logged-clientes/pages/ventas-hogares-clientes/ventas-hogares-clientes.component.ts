import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {Observable} from 'rxjs';
import {TipoIdentificacionSelect} from '../../../../../../interfaces/tipo-identificacion-select';
import {AutoCompleteData} from '../../../../../../interfaces/auto-complete-data';
import {debounceTime, distinctUntilChanged, filter, switchMap, tap} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent, MatDialog} from '@angular/material';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {AppConfig} from '../../../../../../config/app-config';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {AutocompleteService} from '../../../../../../services/autocomplete/autocomplete.service';
import {VentaHogares} from '../../../../../../interfaces/forms/venta-hogares';
import {TipoUsoSelect} from '../../../../../../interfaces/tipo-uso-select';
import {VentasHogaresClientesService} from '../../../../services/no-logged/ventas-hogares-clientes/ventas-hogares-clientes.service';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';
import {Params} from '@angular/router';

@Component({
  selector: 'app-ventas-hogares-clientes',
  templateUrl: './ventas-hogares-clientes.component.html',
  styleUrls: ['./ventas-hogares-clientes.component.scss']
})
export class VentasHogaresClientesComponent implements OnInit {
  @ViewChild(FormGroupDirective) myNgForm;
  form: FormGroup;
  tipoIdentifacion$: Observable<TipoIdentificacionSelect[]>;
  filteredMunicipio$: Observable<AutoCompleteData[]>;
  filteredState$: Observable<AutoCompleteData[]>;
  tipoUso$: Observable<TipoUsoSelect[]>;
  recaptcha: string;
  idPolitic: number;
  idFilePolitic: number;
  textButton = 'GUARDAR';
  constructor(private fb: FormBuilder,
              public _autoComplete: AutocompleteService,
              private dialog: MatDialog,
              private _selects: SelectsService,
              private _ventaHogares: VentasHogaresClientesService,
              public _loadingService: LoadingService) { }

  ngOnInit() {
     this.tipoUso$ = this._selects.getTipoUso()
       .pipe(
         tap(tipo => {
           console.log(tipo);
           this.form.get('tipo_uso').setValue(tipo[1].id);
         })
       );
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
      tipo_uso: [{value: '', disabled: true}, [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
      telefono: ['', [Validators.maxLength(7), Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      celular: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      deseo_recibir: [false, []],
      direccion_predio: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      municipio: [{value: '', disabled: true}, [Validators.required]],
      autorizacion: ['', [Validators.requiredTrue]],
      recaptcha: ['', [Validators.required]]
    });
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
                    const form: VentaHogares = {
                      formId: 6,
                      identificationType: this.form.get('tipo_identificacion').value,
                      identification: this.form.get('identificacion').value,
                      name1: this.form.get('nombre').value,
                      name2: this.form.get('nombre2').value,
                      lastName1: this.form.get('apellido').value,
                      lastName2: this.form.get('apellido2').value,
                      useTypeId: this.form.get('tipo_uso').value,
                      email: this.form.get('email').value,
                      mobile: this.form.get('celular').value.toString(),
                      phoneNumber: this.form.get('telefono').value.toString(),
                      sendEmailNotification: this.form.get('deseo_recibir').value,
                      pieceOfGround: {
                        address: this.form.get('direccion_predio').value,
                        departamentId: this._autoComplete.selectedStateId,
                        townId: this._autoComplete.selectedTownId,
                      },
                      politicId: this.idPolitic,
                      recaptchaToken: this.recaptcha
                    };
              this.textButton = 'GUARDANDO...';
              this.form.disable();
               this._ventaHogares.setVentaHogares(form)
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
