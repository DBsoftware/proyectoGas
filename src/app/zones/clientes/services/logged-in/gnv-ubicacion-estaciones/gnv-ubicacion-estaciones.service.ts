import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppConfig} from '../../../../../config/app-config';
import {GeneralResponse} from '../../../../../interfaces/general-response';
import { map} from 'rxjs/operators';
import {Observable } from 'rxjs';
import {GnvUbicaciones} from '../../../../../interfaces/gnv-ubicaciones';

@Injectable({
  providedIn: 'root'
})
export class GnvUbicacionEstacionesService {

  constructor(private http: HttpClient) { }

  getDatatableData(
                    idMunicipio: number | null,
                    estacion: string | null,
                    size?: string,
                    page?: string): Observable<GnvUbicaciones> {
    let params;
    if (size || page ) {
      params =  new HttpParams({
          fromObject: {
            'size': size || null,
            'page': page || null,
          }
        }
      );
    } else {
      params = new HttpParams();
    }
    let url: string;
    params = AppConfig.addYParam(params);
    if (idMunicipio) {
      url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/vehicularnaturalgastation/_divpola/${ idMunicipio }`;
      return this.http.get<GeneralResponse>(url, { params: params, observe: 'response' })
        .pipe(
          map( response => {
            switch (response.status) {
              case 200:
                return response.body.data;
            }
          })
        );
    } else if (idMunicipio !== null && estacion !== null) {
      url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/vehicularnaturalgastation/_bydescription/_divpola/${ idMunicipio }`;
      return this.http.post<GeneralResponse>(url, {containing: estacion }, { params: params, observe: 'response' })
        .pipe(
          map( response => {
            switch (response.status) {
              case 200:
                return response.body.data;
            }
          })
        );
    } else {
      url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/vehicularnaturalgastation/_bydescription`;
      return this.http.post<GeneralResponse>(url,
        {containing: estacion },
        { params: params, observe: 'response' }
        ).pipe(
          map( response => {
            switch (response.status) {
              case 200:
                return response.body.data;
            }
        })
      );
    }
  }
}
