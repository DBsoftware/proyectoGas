import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LineaEtica} from '../../../../../interfaces/linea-etica';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';
import {GeneralResponse} from '../../../../../interfaces/general-response';

@Injectable({
  providedIn: 'root'
})
export class LineaEticaClientesService {

  constructor(private http: HttpClient) { }

  setPoltitica(form: LineaEtica) {// todo validar el nombre de esta funcion
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/registerstrangeness`;
    return this.http.post<GeneralResponse>(url, form, {observe: 'response', params: AppConfig.yParam});
  }
}
