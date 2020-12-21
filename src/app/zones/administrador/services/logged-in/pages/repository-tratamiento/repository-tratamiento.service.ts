import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppConfig} from '../../../../../../config/app-config';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {GeneralResponse} from '../../../../../../interfaces/general-response';
import {CreatePolitica} from '../../../../../../interfaces/forms/create-politica';
import {Sort} from '../../../../../../interfaces/sort';
import {TratamientoData} from '../../../../../../interfaces/forms/tratamiento-data';
import {ConfigAdmin} from '../../../../config/config-admin';


@Injectable({
  providedIn: 'root'
})
export class RepositoryTratamientoService {

  url = `${ AppConfig.API_DOMAIN }/`;


  constructor(private http: HttpClient) {
  }

  /**
   * Hace una solicitud para traer las políticas
   * @param size
   * @param page
   * @param sort
   */
  getTratamientoData(size?: string, page?: string, sort?: Sort): Observable<TratamientoData> {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/politic/paged`;
    let params;
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
          'size': '5' // todo poner variable global
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

  /* Desactivar o activa una politica politica */
  tooglePolitica(id: number, status: string) {
    let url: string;
    if (status === 'A') {
      url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX  }/company/${ AppConfig.COMPANY_ID }/politic/${ id }/inactive`;
    } else {
      url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX  }/company/${ AppConfig.COMPANY_ID }/politic/${ id }/active`;
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

  /* Hace una solicitud para eliminar una politica */
  eliminarPolitica(id: number) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/politic/${ id }`;
    return this.http.delete<GeneralResponse>(url, {observe: 'response', params: AppConfig.xParam})
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
  createPolitica(fields: CreatePolitica) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/politic`;
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
