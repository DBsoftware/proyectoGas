import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VentasConstructoras} from '../../../../../interfaces/ventas-constructoras';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';
import {GeneralResponse} from '../../../../../interfaces/general-response';

@Injectable({
  providedIn: 'root'
})
export class VentasConstructorasClientesService {

  constructor(private http: HttpClient) { }
  registrerGrandesConstructoras(form: VentasConstructoras) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/commerce/registerlargecustomer`;
    return this.http.post<GeneralResponse>(url, form, {observe: 'response', params: AppConfig.yParam});
  }
}
