import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DisposicionFinalResiduos} from '../../../../../interfaces/forms/disposicion-final-residuos';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';
import {GeneralResponse} from '../../../../../interfaces/general-response';

@Injectable({
  providedIn: 'root'
})
export class DispocisionService {

  constructor(private http: HttpClient) { }
  setDisposicion(form: DisposicionFinalResiduos) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/finaldispositionparticular`;
    return this.http.post<GeneralResponse>(url, form, {observe: 'response', params: AppConfig.yParam});
  }
}
