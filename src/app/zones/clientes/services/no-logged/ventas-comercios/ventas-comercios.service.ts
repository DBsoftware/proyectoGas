import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';
import {GeneralResponse} from '../../../../../interfaces/general-response';
import {VentasComercios} from '../../../../../interfaces/forms/ventas-comercios';
import {map} from 'rxjs/operators';
import {CalculoConsumo} from '../../../../../interfaces/calculo-consumo';

@Injectable({
  providedIn: 'root'
})
export class VentasComerciosService {

  constructor(private http: HttpClient) { }
  setVentaComercio(form: VentasComercios) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/commerce/potentialsubscriber`;
    return this.http.post<GeneralResponse>(url, form, {observe: 'response', params: AppConfig.yParam});
  }
  calcularConsumo(ids: number[]) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/gasdomestictype/calculateconsumption`;
    return this.http.post<GeneralResponse>(url, { gasodomesticTypeIds: ids  }, {observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <CalculoConsumo[]>response.body.data;
          }
        })
      );
  }
}
