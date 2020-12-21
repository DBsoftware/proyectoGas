import { Injectable } from '@angular/core';
import {AppConfig} from '../../../../../../config/app-config';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Sort} from '../../../../../../interfaces/sort';
import {Observable} from 'rxjs';
import {TratamientoData} from '../../../../../../interfaces/forms/tratamiento-data';
import {ConfigAdmin} from '../../../../config/config-admin';
import {GeneralResponse} from '../../../../../../interfaces/general-response';
import {map} from 'rxjs/operators';
import {CreatePolitica} from '../../../../../../interfaces/forms/create-politica';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionTratamientoService {
  url = `${ AppConfig.API_DOMAIN }/`;


  constructor(private http: HttpClient) { }

  /**
   * Hace una solicitud para traer las políticas
   * @param size
   * @param page
   * @param sort
   */
  getTratamientoData(size?: string, page?: string, sort?: Sort): Observable<TratamientoData> {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/authorization/paged`;
    let params: HttpParams = new HttpParams();
    console.log(size, page, sort);
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
        params = new HttpParams({
          fromObject: {
            'size': '5'
          }
        });
    }
    params = AppConfig.addXParam(params);
    return this.http.get<GeneralResponse>(url, {params: params, observe: 'response'})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <TratamientoData>response.body.data;
          }
        })
      );
  }
  /* Desactivar o activa una authorization authorization */
  toogleAutorization(id: number, status: string) {
    let url: string;
    if (status === 'A') {
      url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX  }/company/${ AppConfig.COMPANY_ID }/authorization/${ id }/inactive`;
    } else {
      url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX  }/company/${ AppConfig.COMPANY_ID }/authorization/${ id }/active`;
    }
    return this.http.put<GeneralResponse>(url, {}, {observe: 'response', params: AppConfig.xParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return response.body;
          }
        }));
  }
  /* Hace una solicitud para eliminar una authorizationa */
  eliminarAutorization(id: number) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/authorization/${ id }`;
    return this.http.delete<GeneralResponse>(url,  {observe: 'response', params: AppConfig.xParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return response.body;
          }
        })
      );
  }

  /**
   * Hace una solicitud para crear una política
   * @param fields los campos para crear una política
   */
  createAutorization(fields: CreatePolitica) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/authorization`;
    return this.http.post<GeneralResponse>(url, fields, {observe: 'response', params: AppConfig.xParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 201:
              return response.body;
          }
        })
      );
  }

}
