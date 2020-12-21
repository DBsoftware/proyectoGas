import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';

@Injectable({
  providedIn: 'root'
})
export class ConsultaAvisosClientesService {

  constructor(private http: HttpClient) { }

 getRadicadoPqrwithClientCode(clientCode: number) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/pqrs/solved`;
    return this.http.post(url, {
      userSubscriptionCode: clientCode
    }, {params: AppConfig.xParam});
 }

}
