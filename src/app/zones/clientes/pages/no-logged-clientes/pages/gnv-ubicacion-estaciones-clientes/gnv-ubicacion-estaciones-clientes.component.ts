import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RowRecaudadoresData} from '../../../../../../interfaces/recaudadores-data';
import {Observable} from 'rxjs';
import {AutoCompleteData} from '../../../../../../interfaces/auto-complete-data';
import {debounceTime, distinctUntilChanged, filter, switchMap} from 'rxjs/operators';
import {GnvUbicacionEstacionesService} from '../../../../services/logged-in/gnv-ubicacion-estaciones/gnv-ubicacion-estaciones.service';
import {AutocompleteService} from '../../../../../../services/autocomplete/autocomplete.service';
import {AppConfig} from '../../../../../../config/app-config';
import {GnvUbicaciones} from '../../../../../../interfaces/gnv-ubicaciones';
import {Params} from '@angular/router';
import {LoadingService} from '../../../../../../services/loading/loading.service';
@Component({
  selector: 'app-gnv-ubicacion-estaciones-clientes',
  templateUrl: './gnv-ubicacion-estaciones-clientes.component.html',
  styleUrls: ['./gnv-ubicacion-estaciones-clientes.component.scss']
})
export class GnvUbicacionEstacionesClientesComponent implements OnInit {
  form: FormGroup;
  dataToDatatable: GnvUbicaciones;
  filteredMunicipio$: Observable<AutoCompleteData[]>;
  selectedMunicipioValue: string;
  selectedMunicipioId: number | null;
  filteredEstacion$: Observable<AutoCompleteData[]>;
  selectedEstacionValue: string;
  selectedEstacionId: number | null;
  mapData: any;
  metaDataMap: { municipioId: number, estacionId: number };
  constructor(private _gvnEstaciones: GnvUbicacionEstacionesService,
              private _autoComplete: AutocompleteService,
              public _loading: LoadingService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.filteredMunicipio$ = this.form.get('municipio').valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(100),
        filter( value => value !== null),
        filter(value => value.length > 2),
        filter(value => value !== this.selectedMunicipioValue),
        switchMap(value => this.filter(value, `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/divpola/searchtownbydescription`, AppConfig.yParam)),
      );
  }

  createForm() {
    this.form = this.fb.group({
      municipio: ['', [Validators.minLength(3)]],
      estacion: ['', [Validators.minLength(3)]]
    });
  }


  sendToMap(event: RowRecaudadoresData) {
    this.mapData = event;
  }


  checkInput(event: FocusEvent, input: string) {
    const element = <HTMLInputElement>event.srcElement;
    if (element.value.length > 2) {
      switch (input) {
        case 'municipio':
          const formControlmunicipio = this.form.get('municipio');
          if (formControlmunicipio.value !== this.selectedMunicipioValue) {
            formControlmunicipio.setValue('');
            formControlmunicipio.setErrors({ requireMatchAutoComplete: true });
          }
          break;
        case 'estacion':
          const formControlEstacion = this.form.get('estacion');
          if (formControlEstacion.value !== this.selectedEstacionValue) {
              formControlEstacion.setValue('');
              formControlEstacion.setErrors({ requireMatchAutoComplete: true });
          }
          break;
      }
    }
  }
  selectedEstacion(value: AutoCompleteData) {
    const formControlEstacion = this.form.get('estacion');
    if (value.id !== 404) {
      formControlEstacion.setErrors(null);
      this.selectedEstacionId = value.id;
      this.selectedEstacionValue = value.description;
    } else {
      formControlEstacion.setValue('');
    }
  }

  selectedMunicipio(value: AutoCompleteData) {
    const formControlMunicipio = this.form.get('municipio');
    if (value.id !== 404) {
      formControlMunicipio.setErrors(null);
      this.selectedMunicipioId = value.id;
      this.selectedMunicipioValue = value.description;
    } else {
      formControlMunicipio.setValue('');
    }
  }

  filter(value: string, url: string, tokenAuxParam: Params) {
    return this._autoComplete.searchItem(value, url, tokenAuxParam);
  }

  consultar() {
    const controlEstacion = this.form.get('estacion').value;
    if (this.selectedMunicipioId && controlEstacion === '') {
      // search by municipio
      this._gvnEstaciones.getDatatableData(this.selectedMunicipioId, null)
        .subscribe(data => {
          this.dataToDatatable = data;
        });
    } else if (this.selectedMunicipioId && controlEstacion !== '') {
      // search by municipio and estacion
      this._gvnEstaciones.getDatatableData(this.selectedMunicipioId, controlEstacion)
        .subscribe(data => {
          this.dataToDatatable = data;
        });
    } else {
      // search by estación
      this._gvnEstaciones.getDatatableData(null, controlEstacion)
        .subscribe(data => {
          this.dataToDatatable = data;
        });
    }

  }

}
