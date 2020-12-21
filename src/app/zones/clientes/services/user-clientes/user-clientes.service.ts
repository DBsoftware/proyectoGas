import { Injectable } from '@angular/core';
import {AppConfig} from '../../../../config/app-config';
import {ClientesConfig} from '../../config/clientes-config';
import {HttpClient} from '@angular/common/http';
import {GeneralResponse} from '../../../../interfaces/general-response';
import {map} from 'rxjs/operators';
import {User} from '../../../../interfaces/user';
import {CodigoSuscripcion} from '../../../../interfaces/codigo-suscripcion';

@Injectable({
  providedIn: 'root'
})
export class UserClientesService {

  constructor(private http: HttpClient) { }

  getUserData() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/user/current`;
     return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.xParam})
       .pipe(
         map(response => {
         switch (response.status) {
           case 200:
             return <User>response.body.data;
         }
       })
       );
  }

  getSuscriptionCodes(userId: number) {
    const  url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/user/${ userId }/subscription`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.xParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <CodigoSuscripcion[]>response.body.data;
          }
        })
      );
  }

}
