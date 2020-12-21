import { Component, OnInit } from '@angular/core';
import {RecaudadoresClientesService} from '../../../../services/no-logged/recaudadores-clientes/recaudadores-clientes.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AutoCompleteData} from '../../../../../../interfaces/auto-complete-data';
import {RecaudadoresData } from '../../../../../../interfaces/recaudadores-data';
import {AppConfig} from '../../../../../../config/app-config';
import {ClientesConfig} from '../../../../config/clientes-config';
import {AutocompleteService} from '../../../../../../services/autocomplete/autocomplete.service';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {CategoriaSelect} from '../../../../../../interfaces/categoria-select';
import {Params} from '@angular/router';

@Component({
  selector: 'app-recaudadores',
  templateUrl: './recaudadores-clientes.component.html',
  styleUrls: ['./recaudadores-clientes.component.scss']
})
export class RecaudadoresClientesComponent implements OnInit {

  formRecaudadores: FormGroup;
  dataToDatatable: RecaudadoresData;
  filteredCategoria$: Observable<AutoCompleteData[]>;
  selectedCategoriaValue: string;
  selectedCategoriaId: number | null;
  categoriaSelect$: Observable<CategoriaSelect[]>;
  filteredMunicipio$: Observable<AutoCompleteData[]>;
  selectedMunicipioValue: string;
  selectedMunicipioId: number | null;
  filteredEntidad$: Observable<AutoCompleteData[]>;
  selectedEntidadValue: string;
  selectedEntidadId: number | null;
  mapData: any;
  metaDataMap: { categoriaId: number, municipioId: number, entidadId: number };


  constructor(private _recaudadores: RecaudadoresClientesService,
              private _autoComplete: AutocompleteService,
              private _selects: SelectsService,
              private fb: FormBuilder) {
    this.createForm();
    this.categoriaSelect$ = this._selects.getCategoria();

  }
  createForm() {
    this.formRecaudadores = this.fb.group({
      categoria: ['', [Validators.minLength(3)]],
      municipio: ['', [Validators.minLength(3)]],
      entidad: ['', [Validators.minLength(3)]]
    });
  }
  ngOnInit() {
    this.filteredCategoria$ = this.formRecaudadores.get('categoria').valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(200),
        filter(value => value.length > 2),
        switchMap(value =>  {
          return this.filter(value, `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/collectioncategory/searchbydescription`, AppConfig.yParam);
        }),
      );
    this.filteredMunicipio$ = this.formRecaudadores.get('municipio').valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(100),
        filter(value => value.length > 2),
        switchMap(value => this.filter(value, `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/divpola/searchtownbydescription`, AppConfig.yParam)),
      );
    this.filteredEntidad$ = this.formRecaudadores.get('entidad').valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(100),
        filter(value => value.length > 2),
        switchMap(value => this.filter(value, `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/pointofcollection/searchbydescription`, AppConfig.yParam)),
      );
  }


  filter(value: string, url: string, tokenAuxParam: Params) {
    return this._autoComplete.searchItem(value, url, tokenAuxParam);
  }

  consultar() {
    this.metaDataMap = { categoriaId: this.selectedCategoriaId, municipioId: this.selectedMunicipioId, entidadId: this.selectedEntidadId };
    this._recaudadores.getDatatableData(this.selectedCategoriaId, this.selectedMunicipioId, this.selectedEntidadId)
      .subscribe(data => {
        this.dataToDatatable = data;
      });
  }
  sendToMap(event) {
    this.mapData = event;
  }

  checkInput(event: FocusEvent, input: string) {
    const element = <HTMLInputElement>event.srcElement;
    if (element.value.length > 2) {
      switch (input) {
        case 'entidad':
          const formControlEntidad = this.formRecaudadores.get('entidad');
          if (formControlEntidad.value !== this.selectedEntidadValue) {
              formControlEntidad.setValue('');
            formControlEntidad.setErrors({requireMatchAutoComplete: true});
          }
          break;
        case 'categoria':
          const formControlCategoria = this.formRecaudadores.get('categoria');
          if (formControlCategoria.value !== this.selectedCategoriaValue) {
            formControlCategoria.setValue('');
            formControlCategoria.setErrors({requireMatchAutoComplete: true});
          }
          break;
        case 'municipio':
          const formControlmunicipio = this.formRecaudadores.get('municipio');
          if (formControlmunicipio.value !== this.selectedMunicipioValue) {
              formControlmunicipio.setValue('');
              formControlmunicipio.setErrors({requireMatchAutoComplete: true});
          }
          break;
      }
    }

  }
  selectedCategoria(value: AutoCompleteData) {
    const formControlCategoria =  this.formRecaudadores.get('categoria');
    if (value.id !== 400) {
      formControlCategoria.setErrors(null);
      this.selectedCategoriaId = value.id;
      this.selectedCategoriaValue = value.description;
    } else {
      formControlCategoria.setValue('');
    }
  }
  selectedEntidad(value: AutoCompleteData) {
    const formControlEntidad = this.formRecaudadores.get('entidad');
    if (value.id !== 404) {
      formControlEntidad.setErrors(null);
      this.selectedEntidadId = value.id;
      this.selectedEntidadValue = value.description;
    } else {
      formControlEntidad.setValue('');
    }
  }

  selectedMunicipio(value: AutoCompleteData) {
    const formControlMunicipio = this.formRecaudadores.get('municipio');
    if (value.id !== 404) {
      formControlMunicipio.setErrors(null);
      this.selectedMunicipioId = value.id;
      this.selectedMunicipioValue = value.description;
    } else {
      formControlMunicipio.setValue('');
    }
  }


}
