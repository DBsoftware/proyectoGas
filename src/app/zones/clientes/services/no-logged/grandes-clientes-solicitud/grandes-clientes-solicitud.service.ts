import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GrandesClientesSolicitud} from '../../../../../interfaces/forms/grandes-clientes-solicitud';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';
import {GeneralResponse} from '../../../../../interfaces/general-response';

@Injectable({
  providedIn: 'root'
})
export class GrandesClientesSolicitudService {

  constructor(private http: HttpClient) { }
  setServiceRequest(form: GrandesClientesSolicitud) {
    const  url = `${ AppConfig.API_DOMAIN }:${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/commerce/largecustomer/servicerequest`;
    return this.http.post<GeneralResponse>(url, form, {observe: 'response', params: AppConfig.yParam});
  }
}
