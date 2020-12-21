import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PqrClientes} from '../../../../../interfaces/forms/pqr-clientes';
import {GeneralResponse} from '../../../../../interfaces/general-response';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';

@Injectable({
  providedIn: 'root'
})
export class PqrClientesService {
  constructor(private http: HttpClient) { }
  createPQR(pqrData: PqrClientes) {
    console.log(pqrData);
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/pqrs`;
    return this.http.post<GeneralResponse>(url, pqrData, {observe: 'response', params: AppConfig.xParam});
  }


}
