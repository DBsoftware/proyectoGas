import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../../../config/app-config';
import {GeneralResponse} from '../../../../interfaces/general-response';
import {ConfigAdmin} from '../../../administrador/config/config-admin';
import {ProveedoresConfig} from '../../config/proveedores-config';
import {map} from 'rxjs/operators';
import {RowEvaluacion} from '../../../../interfaces/evaluacion';
import {EvaluacionProveedoresList} from '../../../../interfaces/evaluacion-proveedores-list';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionDesempenoProveedoresService {

  constructor(private http: HttpClient) { }
  obtenerListaAnos() {
    const  url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/performancevaluation/years`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.xParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
               return response.body.data;
          }
        })
      );
  }
  obtenerPorAno(year: number) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/performancevaluation/year/${ year }`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.xParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <EvaluacionProveedoresList[]>response.body.data;
            default:
              return [];
          }
        })
      );
  }
}
