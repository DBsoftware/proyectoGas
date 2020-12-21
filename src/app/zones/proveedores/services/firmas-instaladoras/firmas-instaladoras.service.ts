import { Injectable } from '@angular/core';
import {FirmasInstaladorasProv} from '../../../../interfaces/forms/firmas-instaladoras-prov';
import {AppConfig} from '../../../../config/app-config';
import {HttpClient} from '@angular/common/http';
import {GeneralResponse} from '../../../../interfaces/general-response';
import {ProveedoresConfig} from '../../config/proveedores-config';

@Injectable({
  providedIn: 'root'
})
export class FirmasInstaladorasService {

  constructor(private http: HttpClient) { }
  crearFirma(form: FirmasInstaladorasProv) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ProveedoresConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/installationfirm`;
    return this.http.post<GeneralResponse>(url, form, {observe: 'response', params: AppConfig.xParam});
  }
}
