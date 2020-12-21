import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../../../config/app-config';
import {ConfigColaboradores} from '../../config/config-colaboradores';
import {RegisterFormColaboradores} from '../../../../interfaces/forms/register-form-colaboradores';
import {GeneralResponse} from '../../../../interfaces/general-response';

@Injectable({
  providedIn: 'root'
})
export class RegisterColaboradoresService {

  constructor(private http: HttpClient) { }
  registerColaborador(form: RegisterFormColaboradores) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigColaboradores.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ConfigColaboradores.ZONE_ID }/user/sign-up`;
    return this.http.post<GeneralResponse>(url, form, {observe: 'response', params: AppConfig.yParam});
  }
}
