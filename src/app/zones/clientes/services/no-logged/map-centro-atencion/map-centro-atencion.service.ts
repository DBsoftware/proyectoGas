import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of as observableOf} from 'rxjs';
import {MockMap} from './mock-map';
import {delay, map} from 'rxjs/operators';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';
import {GeneralResponse} from '../../../../../interfaces/general-response';

@Injectable({
  providedIn: 'root'
})
export class MapCentroAtencionService {

  constructor(private http: HttpClient) { }

  getList() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/pointofattention`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.yParam})
      .pipe(map(response => {
        switch (response.status) {
          case 200:
            return response.body.data;
        }
      }));
   /* return observableOf(MockMap.getList)
      .pipe(delay(1000));*/
  }
}
