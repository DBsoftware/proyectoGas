import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormularioColaboradores} from '../../../../interfaces/forms/formulario-colaboradores';
import {AppConfig} from '../../../../config/app-config';
import {ConfigColaboradores} from '../../config/config-colaboradores';
import {GeneralResponse} from '../../../../interfaces/general-response';

@Injectable({
  providedIn: 'root'
})
export class FormularioContactoService {

  constructor(private http: HttpClient) { }

  crearContacto(form: FormularioColaboradores) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigColaboradores.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ConfigColaboradores.ZONE_ID }/contact`;
    return this.http.post<GeneralResponse>(url, form, {observe: 'response', params: AppConfig.xParam});
  }
}
