import { Injectable } from '@angular/core';
import {Sort} from '../../../../../../interfaces/sort';
import {GeneralResponse} from '../../../../../../interfaces/general-response';
import {AppConfig} from '../../../../../../config/app-config';
import {HttpClient, HttpParams} from '@angular/common/http';
import {of} from 'rxjs';
import {EvaluacionDesempenoMock} from '../evaluacion-desempeno/evaluacion-desempeno-mock';
import {delay, map} from 'rxjs/operators';
import {ConvocatoriaMock} from './convocatoria-mock';
import {ProveedoresConfig} from '../../../../../proveedores/config/proveedores-config';
import {CreateConvocatoria} from '../../../../../../interfaces/create-convocatoria';
import {ConvocatoriasTable, RowConvocatoriasTable} from '../../../../../../interfaces/convocatorias';

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriaService {

  constructor(private  http: HttpClient) { }
  getTableConvocatoria(size?: string, page?: string, sort?: Sort) {

     const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/announcement/paged`;
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
              return <ConvocatoriasTable>response.body.data;
          }
        })
      );
  }
  crearConvocatoria(form: CreateConvocatoria) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/announcement`;
    return this.http.post<GeneralResponse>(url, form, {observe: 'response', params: AppConfig.xParam});
  }

  eliminarConvocatoria(id: number) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/announcement/${ id }`;
    return this.http.delete<GeneralResponse>(url, {observe: 'response', params: AppConfig.xParam});
  }

  getConvocatoriaById(id: number) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/announcement/${ id }`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.xParam})
      .pipe(
        map(data => {
          switch (data.status) {
            case 200:
              return <RowConvocatoriasTable>data.body.data;
          }
        })
      );
  }

  editarConvocatoria(form: CreateConvocatoria,  id: number) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/announcement/${ id }`;
    return this.http.put<GeneralResponse>(url, form, {observe: 'response', params: AppConfig.xParam});
  }
  toogleConvocatoria(id: number) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/announcement/${ id }/activeinactive`;
    return this.http.put<GeneralResponse>(url, {}, {observe: 'response', params: AppConfig.xParam});
  }

}
