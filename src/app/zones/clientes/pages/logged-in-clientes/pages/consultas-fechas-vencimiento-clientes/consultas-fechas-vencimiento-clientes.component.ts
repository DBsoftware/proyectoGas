import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {AutoCompleteData} from '../../../../../../interfaces/auto-complete-data';
import {debounceTime, distinctUntilChanged, filter, switchMap} from 'rxjs/operators';
import {RecaudadoresClientesService} from '../../../../services/no-logged/recaudadores-clientes/recaudadores-clientes.service';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {MatAutocompleteSelectedEvent} from '@angular/material';
import {ConsultarFechasDeVencimientoClientesService} from '../../../../services/logged-in/consultar-fechas-de-vencimiento-clientes/consultar-fechas-de-vencimiento-clientes.service';
import {ConsultaFechaVencimiento} from '../../../../../../interfaces/consulta-fecha-vencimiento-data';
import {CodigoSuscripcion} from '../../../../../../interfaces/codigo-suscripcion';
import {UserClientesService} from '../../../../services/user-clientes/user-clientes.service';
import {AppConfig} from '../../../../../../config/app-config';
import {AutocompleteService} from '../../../../../../services/autocomplete/autocomplete.service';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {ClientesConfig} from '../../../../config/clientes-config';
import {Params} from '@angular/router';

@Component({
  selector: 'app-consultas-fechas-vencimiento-clientes',
  templateUrl: './consultas-fechas-vencimiento-clientes.component.html',
  styleUrls: ['./consultas-fechas-vencimiento-clientes.component.scss']
})
export class ConsultasFechasVencimientoClientesComponent implements OnInit {
  datatable: ConsultaFechaVencimiento;
  datatable2: ConsultaFechaVencimiento;
  codigoCliente$: Observable<CodigoSuscripcion[]>;
  filteredMunicipio$: Observable<any>;
  filteredBarrio$: Observable<any>;
  form: FormGroup;
  form2: FormGroup;
  deactiveButton = false;
  deactiveButton2 = false;
  selectedMunicipio: string;
  selectedIdMunicipio: number;
  selectedBarrio: string;
  selectedIdBarrio: number;
  userId: number;
  constructor(private fb: FormBuilder,
              private _user: UserClientesService,
              private _selects: SelectsService,
              public _loading: LoadingService,
              private _consultas: ConsultarFechasDeVencimientoClientesService,
              private _autocomplete: AutocompleteService) {
  }

  ngOnInit() {
    this._user.getUserData()
      .subscribe(user => {
        this.userId = user.userId;
       this.codigoCliente$ = this._selects.getSuscriptionCodes(this.userId);
      });
    this.createForm();
    this.filteredMunicipio$ = this.form2.get('municipio').valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(200),
        filter(value => value.length > 2),
        switchMap(value => {
          return this.filter(value, `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/project/searchbydescription`, AppConfig.yParam);
        }),
      );


    this.filteredBarrio$ = this.form2.get('barrio').valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(200),
        filter(value => value.length > 2),
        switchMap(value => {
          return this.filter(value, `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/project/1/neighborhood/searchbydescription`, AppConfig.yParam);
        })
      );
  }

  createForm() {
    this.form = this.fb.group({
      codigo_cliente: [{value: '', disabled: true}, [Validators.required]],
      recaptcha: ['', [Validators.required]]
    });
    this.form2 = this.fb.group({
      municipio: [{value: '', disabled: true}, [Validators.required]],
      barrio: [{value: '', disabled: true}, [Validators.required]],
      recaptcha: ['', [Validators.required]]
    });
  }
  resolvedRecaptcha(event) {
    if (event === null) {
      this.form.disable();
      this.deactiveButton = true;
    }  else {
      this.deactiveButton = false;
      this.form.get('codigo_cliente').enable();
    }
  }

  resolvedRecaptcha2(event) {
      if (event === null) {
        this.form2.disable();
        this.deactiveButton2 = true;
      }  else {
        this.deactiveButton2 = false;
        this.form2.get('municipio').enable();
      }
  }
  closedAuto(input) {
    const formControlMunicipio = this.form2.get('municipio');
    const formControlBarrio = this.form2.get('barrio');
    if (formControlMunicipio.value.length > 2 || formControlBarrio.value > 2) {
      switch (input) {
        case 'municipio':
          if ((formControlMunicipio.value !== this.selectedMunicipio)) {
            formControlMunicipio.setValue('');
            formControlBarrio.disable();
            formControlBarrio.setValue('');
            this.selectedBarrio = null;
          }
          break;
        case 'barrio':
          if ((formControlBarrio.value !== this.selectedBarrio)) {
              formControlBarrio.setValue('');
              this.selectedBarrio = null;
          }
          break;
      }
    } else {
      this.selectedBarrio = null;
      this.selectedMunicipio = null;
      formControlBarrio.disable();
      formControlBarrio.setValue('');
    }
  }

  selectMunicipio(value: MatAutocompleteSelectedEvent) {
    this.form2.get('municipio').setErrors(null);
    this.selectedMunicipio = value.option.value;
    this.form2.get('barrio').enable();
    this.form2.get('barrio').setValue('');
  }

  clicMunicipio(value: any) {
    const formControlMunicipio = this.form2.get('municipio');
    const formControlBarrio = this.form2.get('barrio');
    if (value.id !== 404) {
      this.selectedIdMunicipio = value.townId;
    } else {
      formControlMunicipio.setValue('');
      formControlBarrio.disable();
      formControlBarrio.setValue('');
    }
  }
  selectBarrio(value: MatAutocompleteSelectedEvent) {
    this.form2.get('barrio').setErrors(null);
    this.selectedBarrio = value.option.value;
  }
  clicBarrio(value: any) {
    const formControlBarrio = this.form2.get('barrio');
    if (value.id !== 404) {
      this.selectedIdBarrio = value.townId;
    } else {
      formControlBarrio.setValue('');
      this.selectedBarrio = null;
    }
  }

  filter(value: string, url: string, auxTokenParam: Params) {
    return this._autocomplete.searchItem(value, url, auxTokenParam);
  }

  consultar() {
    this._consultas.requestDataTablewithClientCode(null, null, this.userId, this.form.get('codigo_cliente').value)
      .subscribe(data => {
        this.datatable = data;
      });
  }

  consultar2() {
    this._consultas.requestDataTableWithMunicipios(null, null, this.selectedIdMunicipio, this.selectedIdBarrio)
      .subscribe(data => {
        this.datatable2 = data;
      });
  }


}
