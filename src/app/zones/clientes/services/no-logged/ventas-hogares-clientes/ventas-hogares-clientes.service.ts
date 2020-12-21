import { Injectable } from '@angular/core';
import {VentaHogares} from '../../../../../interfaces/forms/venta-hogares';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';
import {HttpClient} from '@angular/common/http';
import {GeneralResponse} from '../../../../../interfaces/general-response';

@Injectable({
  providedIn: 'root'
})
export class VentasHogaresClientesService {

  constructor(private http: HttpClient) { }

  setVentaHogares(form: VentaHogares) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/homes/potentialsubscriber`;
     return this.http.post<GeneralResponse>(url, form, {observe: 'response', params: AppConfig.yParam});
  }


}
