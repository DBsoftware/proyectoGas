import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';
import {map} from 'rxjs/operators';
import {GeneralResponse} from '../../../../../interfaces/general-response';

@Injectable({
  providedIn: 'root'
})
export class ManageCodesClientesService {

  constructor(private http: HttpClient) { }
  getUserSuscription(userId: number,
                     size?: string,
                     page?: string) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/user/${ userId }/subscription/paged`;
    let params;
    if (size || page ) {
      params =  new HttpParams({
          fromObject: {
            'size': size || null,
            'page': page || null,
          }
        }
      );
    } else {
      params = new HttpParams();
    }
     params = AppConfig.addXParam(params);
    return  this.http.get<GeneralResponse>(url, {observe: 'response', params: params})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return response.body.data;
          }
        })
      );
  }
  createCode(userId: number, form: any) {
    const url  = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/user/${userId }/subscription`;
    return this.http.post<GeneralResponse>(url, form, {observe: 'response', params: AppConfig.xParam});
  }
  updateCode(userId: number, suscripcionId: number, form: any) {
    const url  = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/user/${userId }/subscription/${ suscripcionId }`;
    return this.http.put<GeneralResponse>(url, form, {observe: 'response', params: AppConfig.xParam});
  }

}
