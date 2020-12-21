import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {EnvioFacturaMock} from './envio-factura-mock';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';

@Injectable({
  providedIn: 'root'
})
export class EnvioFacturaMedioCorreoClientesService {

  constructor(private http: HttpClient) { }
  togglePolitica(userId: number, suscriptionCode: string) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/user/${ userId }/subscription/registerinvoiceinemail`;
    return this.http.put(url, {subscriptionCode: suscriptionCode}, {observe: 'response', params: AppConfig.xParam});
  }
}
