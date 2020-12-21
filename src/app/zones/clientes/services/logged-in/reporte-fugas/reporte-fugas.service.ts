import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReporteDeFugas} from '../../../../../interfaces/forms/reporte-de-fugas';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';
import {GeneralResponse} from '../../../../../interfaces/general-response';

@Injectable({
  providedIn: 'root'
})
export class ReporteFugasService {

  constructor(private http: HttpClient) { }

  createReporte(report: ReporteDeFugas) {
   const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/leakreport`;
   return this.http.post<GeneralResponse>(url, report, {observe: 'response', params: AppConfig.xParam});

  }

}
