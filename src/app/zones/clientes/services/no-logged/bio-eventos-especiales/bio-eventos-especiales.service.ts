import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EventosEspeciales} from '../../../../../interfaces/forms/eventos-especiales';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';
import {GeneralResponse} from '../../../../../interfaces/general-response';

@Injectable({
  providedIn: 'root'
})
export class BioEventosEspecialesService {

  constructor(private http: HttpClient) { }
  setEventosEspeciales(form: EventosEspeciales) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/specialevent`;
    return this.http.post<GeneralResponse>(url, form, {observe: 'response', params: AppConfig.yParam});
  }
}
