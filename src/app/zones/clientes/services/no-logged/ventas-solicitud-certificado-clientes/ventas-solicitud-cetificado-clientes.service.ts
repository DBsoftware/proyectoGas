import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CertificadoDisponibilidad} from '../../../../../interfaces/forms/certificado-disponibilidad';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';
import {GeneralResponse} from '../../../../../interfaces/general-response';

@Injectable({
  providedIn: 'root'
})
export class VentasSolicitudCetificadoClientesService {

  constructor(private http: HttpClient) {
  }

/*  searchItem(key: string, url: string) {
    return of(VentasSolicitudCetificadoMock.municipiosAutocomplete)
      .pipe(delay(500));
    /!*    return this.http.post<GeneralResponse>(url, {containing: key}, {observe: 'response'})
          .pipe(
            map(response => {
              switch (response.status) {
                case 200:
                  return response.body.data;
              }
            })
          );
    }*!/
  }*/
  setVentasSolicitudCertificado(form: CertificadoDisponibilidad) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/certificateofavailability`;
    return this.http.post<GeneralResponse>(url, form, {observe: 'response', params: AppConfig.yParam});
  }
}
