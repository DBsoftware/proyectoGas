import { Injectable } from '@angular/core';
import {GeneralResponse} from '../../interfaces/general-response';
import {debounceTime, delay, distinctUntilChanged, filter, map, switchMap} from 'rxjs/operators';
import {HttpClient,  HttpParams} from '@angular/common/http';
import {Params} from '@angular/router';
import {AbstractControl} from '@angular/forms';
import {AppConfig} from '../../config/app-config';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {
  selectedItemValue: string;
  selectedStateCode: string;
  selectedStateId: number;
  selectedStateRepresentanteId: number;
  selectedStateRepresentanteCode: string;
  selectedTownRepresentanteId: number;
  selectedTownRepresentanteCode: string;
  selectedTownId: number;
  selectedTownCode: string;
  proveedorIdSelected: number;
  departmentSearched$: Subject<boolean> = new Subject<boolean>();
  constructor(private http: HttpClient) { }

  /**
   * hace una peticion para filtrar los resultados dada una URL
   * @param control
   * @param urlTofilter
   * @param tokenAux
   * @param valueFiltered
   */
  controlToFilter(control: AbstractControl, urlTofilter: string, tokenAux: Params) {
   return  control.valueChanges
      .pipe(
      distinctUntilChanged(),
      debounceTime(200),
      filter(value => value !== null),
      filter(value => value.length > 2),
      filter(value => value !== this.selectedItemValue),
      switchMap(value => {
        return this.searchItem(value, urlTofilter, tokenAux);
      })
      );
  }

  searchItem(key: string, url: string, tokenAuxParam: Params) {
    return this.http.post<GeneralResponse>(url, {containing: key}, {observe: 'response', params: tokenAuxParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              if (response.body.data) {
                if (response.body.data.length > 0) {
                  return response.body.data;
                } else {
                  return [{description: 'Sin resultados', id: 404}];
                }
              }
              break;
              default:
              return [{description: 'Sin resultados', id: 404}];
          }
        })
      );
  }
  /**
   * Se activa cuando se cierra un autocomplete
   * para comprar que el valor seleccionado en el autocomplete concida con el valor que tiene el control
   * */
  compareValueWithSelection(control: AbstractControl) {
    const formControlState = control;
    if (formControlState.value.length > 2 ) {
      if (formControlState.value !== this.selectedItemValue ) {
        formControlState.setValue('');
        formControlState.setErrors(
          {
          requireMatchAutoComplete: true
          }
          );
      }
    }
  }

  /**
   *  A dierencia del anterior método aqui se hace algunas cosas adicionales para
   *  habilitar el control de municipio y hacer algunas validaciones
   * */
  compareValueWithSelectionState(control: AbstractControl, controlToEnable: AbstractControl) {
    const formControlState = control;
    if (controlToEnable.disabled) {
      controlToEnable.enable();
    }
    if (formControlState.value.length > 2 ) {
      if (formControlState.value !== this.selectedItemValue ) {
        formControlState.setValue('');
        formControlState.setErrors(
          {
            requireMatchAutoComplete: true
          }
        );
      }
    }
    controlToEnable.setValue('');
  }

  /**
   *  Guarda el item seleccionado en una variable, para luego comparar el valor,
   *  del item seleccionado con el valor del control
   * @param event
   */
  seeSelectionObject(event, typeOfControl?: string) {
    if (event.description !== 'Sin resultados') {
      this.selectedItemValue = event.description;
      switch (typeOfControl) {
        case 'departamento':
          this.selectedStateId = event.id;
          this.selectedStateCode = event.code;
          break;
        case 'municipio':
          this.selectedTownId = event.id;
          this.selectedTownCode = event.code;
          break;
        case 'departamento_representante':
          this.selectedStateRepresentanteId = event.id;
          this.selectedStateRepresentanteCode = event.code;
          break;
        case 'ciudad_representante':
          this.selectedTownRepresentanteId = event.id;
          this.selectedTownRepresentanteCode = event.code;
          break;
        case  'proveedores':
          this.proveedorIdSelected = event.id;
          this.selectedItemValue = event.companyName;
          break;
      }
      this.departmentSearched$.next(true);
    } else {
      this.selectedItemValue = 'No coinciden';
    }
  }
}
