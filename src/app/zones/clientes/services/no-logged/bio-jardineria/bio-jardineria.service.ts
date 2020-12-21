import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BioJardineria} from '../../../../../interfaces/forms/bio-jardineria';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';
import {GeneralResponse} from '../../../../../interfaces/general-response';

@Injectable({
  providedIn: 'root'
})
export class BioJardineriaService {

  constructor(private http: HttpClient) { }

  setJardineria(form: BioJardineria) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/gardening`;
    return this.http.post<GeneralResponse>(url, form, { observe: 'response', params: AppConfig.yParam});
  }
}
