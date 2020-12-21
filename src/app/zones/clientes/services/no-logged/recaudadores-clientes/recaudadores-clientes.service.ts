
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {of as observableOf } from 'rxjs';
import {RecaudadoresClientesMock} from './recaudadores-clientes-mock';
import {delay, map} from 'rxjs/operators';
import {GeneralResponse} from '../../../../../interfaces/general-response';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';
import {RecaudadoresData} from '../../../../../interfaces/recaudadores-data';

@Injectable({
  providedIn: 'root'
})
export class RecaudadoresClientesService {

  constructor(private http: HttpClient) {}

  getDatatableData( idCategoria: number | null,
                    idEntidad: number | null,
                    idMunicipio: number | null,
                    size?: string,
                    page?: string
                    ) {
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
    const  url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/pointofcollection/composedsearch/paged`;
     params = AppConfig.addYParam(params);
    return this.http.post<GeneralResponse>(url,
      {
        pointOfCollectionCategoryId: idCategoria || null,
        townId: idMunicipio || null,
        pointOfCollectionId: idEntidad || null
      }, {params: params, observe: 'response'}).pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <RecaudadoresData>response.body.data;
          }
        })
    );

/*    return observableOf(RecaudadoresClientesMock.recaudadoresData)
      .pipe(delay(500));*/
  }
}
