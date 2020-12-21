import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Sort} from '../../../../../../interfaces/sort';
import {AppConfig} from '../../../../../../config/app-config';
import {ConfigAdmin} from '../../../../config/config-admin';
import {ProveedoresConfig} from '../../../../../proveedores/config/proveedores-config';
import {GeneralResponse} from '../../../../../../interfaces/general-response';
import {map} from 'rxjs/operators';
import {EvaluacionTable} from '../../../../../../interfaces/evaluacion';
import {LineaEticaTable} from '../../../../../../interfaces/linea-etica-table';

@Injectable({
  providedIn: 'root'
})
export class AdmLineaEticaService {
  constructor(private http: HttpClient) {}

  getTableEvaluacion(size?: string, page?: string, sort?: Sort) {
    const url = `${AppConfig.API_DOMAIN}:${AppConfig.PORT}/${ConfigAdmin.ZONE_PREFIX}/company/${AppConfig.COMPANY_ID}/zone/${ProveedoresConfig.ZONE_ID}/performancevaluation/paged`;
    let params: HttpParams;
    if (sort) {
      params = new HttpParams({
          fromObject: {
            'size': size || null,
            'page': page || null,
            'sort': `${sort.property},${sort.direction}`
          }
        }
      );
    } else if (size || page) {
      params = new HttpParams({
        fromObject: {
          'size': size || null,
          'page': page || null,
        }
      });
    } else {
      params = new HttpParams();
    }
    params = AppConfig.addXParam(params);
    return this.http.get<GeneralResponse>(url, {params: params, observe: 'response'})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <LineaEticaTable>response.body.data;
          }
        })
      );
  }
}
