import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';
import {map} from 'rxjs/operators';
import {GeneralResponse} from '../../../../../interfaces/general-response';
import {FinancingAndSocioEconomic} from '../../../../../interfaces/financing-and-socio-economic';
import {Observable} from 'rxjs';
import {ParameterType} from '../../../../../interfaces/parameter-type';

@Injectable({
  providedIn: 'root'
})
export class SimuladorService {

  constructor(private http: HttpClient) { }

  getParametersOfType(type: string) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/financingparameter/getbytype`;
    return this.http.post<GeneralResponse>(url, {type: type}, { observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <ParameterType>response.body.data;
          }
        })
      );
  }
  getConceptsByFinancingParameters(financingParameter: number, estrato: number): Observable<FinancingAndSocioEconomic[]> {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/financingparameter/${ financingParameter }/concept/_gasodomesticcategory/${ estrato }`;
    return this.http.get<GeneralResponse>(url, { observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <FinancingAndSocioEconomic[]>response.body.data;
          }
        })
      );
  }

  /**
   * Tarifas simulacion del servicio
   * @param financingParameter
   * @param estrato
   * @param numberOfInstall
   * @param initialInstallmentValue
   */
  simulate(financingParameter: number, estrato: number, numberOfInstall: number, initialInstallmentValue: number) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/financingparameter/${ financingParameter }/concept/_gasodomesticcategory/${ estrato }/simulate`;
    return this.http.post<GeneralResponse>(url,
      {
        numberOfInstallments: numberOfInstall,
        initialInstallmentValue: initialInstallmentValue
    },
      { observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return response.body.data;
          }
        })
      );
  }
}
