import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AsesoramientoPago} from '../../../../../interfaces/forms/asesoramiento-pago';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';
import {GeneralResponse} from '../../../../../interfaces/general-response';

@Injectable({
  providedIn: 'root'
})
export class BioAsesoramientoPagoService {

  constructor(private http: HttpClient) { }
  setAsesoramiento(form: AsesoramientoPago) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ClientesConfig.ZONE_ID }/paymentadvice`;
    return this.http.post<GeneralResponse>(url, form, {observe: 'response', params: AppConfig.yParam});
  }
}
