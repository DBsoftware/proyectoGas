import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResuelveDeudaClientes} from '../../../../../interfaces/forms/resuelve-deuda-clientes';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';
import {GeneralResponse} from '../../../../../interfaces/general-response';

@Injectable({
  providedIn: 'root'
})
export class ResuelveTuDeudaClientesService {

  constructor(private http: HttpClient) { }
  createRequestSolveDebt(debtRequest: ResuelveDeudaClientes) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/normalizedebt`;
    return this.http.post<GeneralResponse>(url, debtRequest, {observe: 'response', params: AppConfig.xParam});
  }
}
