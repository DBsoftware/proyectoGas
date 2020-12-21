import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../../../config/app-config';
import {GeneralResponse} from '../../../../interfaces/general-response';
import {ProveedoresConfig} from '../../config/proveedores-config';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriasProveedoresService {

  constructor(private http: HttpClient) { }
  obtenerConvocatorias() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/announcement`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.xParam})
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
