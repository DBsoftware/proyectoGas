import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {GeneralResponse} from '../../../../../../interfaces/general-response';
import {AppConfig} from '../../../../../../config/app-config';
import {Sort} from '../../../../../../interfaces/sort';
import {of} from 'rxjs';
import {ActiveAccountProveedoresMock} from '../active-account-proveedores/active-account-proveedores-mock';
import {delay, map} from 'rxjs/operators';
import {EvaluacionDesempenoMock} from './evaluacion-desempeno-mock';
import {ProveedoresConfig} from '../../../../../proveedores/config/proveedores-config';
import {ConfigAdmin} from '../../../../config/config-admin';
// import {EvaluacionTable, RowEvaluacionsTable} from '../../../../../../interfaces/convocatorias';
import {ToogleEvaluacion} from '../../../../../../interfaces/toogle-evaluacion';
import {EvaluacionTable, RowEvaluacion} from '../../../../../../interfaces/evaluacion';
import {CreateConvocatoria} from '../../../../../../interfaces/create-convocatoria';
import {CreateEvaluacion} from '../../../../../../interfaces/create-evaluacion';
// import {CreateEvaluacion} from '../../../../../../interfaces/create-convocatoria';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionDesempenoService {
  constructor(private http: HttpClient) {}
  getTableEvaluacion(size?: string, page?: string, sort?: Sort) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/performancevaluation/paged`;
    let params: HttpParams;
    if (sort) {
      params = new HttpParams({
          fromObject: {
            'size': size || null,
            'page': page || null,
            'sort': `${ sort.property },${ sort.direction }`
          }
        }
      );
    } else if (size || page) {
      params = new HttpParams({
        fromObject: {
          'size': size || null,
          'page': page || null,
        }
      });
    } else {
      params = new HttpParams();
    }
    params = AppConfig.addXParam(params);
    return this.http.get<GeneralResponse>(url, {params: params, observe: 'response'})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <EvaluacionTable>response.body.data;
          }
        })
      );
  }
  crearEvaluacion(form: CreateEvaluacion) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/performancevaluation`;
    return this.http.post<GeneralResponse>(url, form, {observe: 'response', params: AppConfig.xParam});
  }

  eliminarEvaluacion(id: number) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/performancevaluation/${ id }`;
    return this.http.delete<GeneralResponse>(url, {observe: 'response', params: AppConfig.xParam});
  }

  getEvaluacionById(id: number) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/performancevaluation/${ id }`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.xParam})
      .pipe(
        map(data => {
          switch (data.status) {
            case 200:
              return <RowEvaluacion>data.body.data;
          }
        })
      );
  }

  editarEvaluacion(form: CreateEvaluacion,  id: number) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/performancevaluation/${ id }`;
    return this.http.put<GeneralResponse>(url, form, {observe: 'response', params: AppConfig.xParam});
  }
  toogleEvaluacion(id: number) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/performancevaluation/${ id }/activeinactive`;
    return this.http.put<GeneralResponse>(url, {}, {observe: 'response', params: AppConfig.xParam});
  }

}
