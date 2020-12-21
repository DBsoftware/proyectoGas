import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GeneralResponse} from '../../../../../interfaces/general-response';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';
import {map} from 'rxjs/operators';
import {FrecuenciaRecoleccion} from '../../../../../interfaces/frecuencia-recoleccion';

@Injectable({
  providedIn: 'root'
})
export class FrecuenciaRecoleccionService {

  constructor(private http: HttpClient) { }
  getDatatableData(suscriptionCode: string, proccessId: number) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/frequencyofcollectionandsweeping/searchbydescriptionandprocessid`;
    return this.http.post<GeneralResponse>
    (
      url,
      {	subscriptionCode: suscriptionCode,
      processId: proccessId },
      {observe: 'response', params: AppConfig.yParam}
      ).pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <FrecuenciaRecoleccion>response.body.data;
          }
        })
    );
  }
}
