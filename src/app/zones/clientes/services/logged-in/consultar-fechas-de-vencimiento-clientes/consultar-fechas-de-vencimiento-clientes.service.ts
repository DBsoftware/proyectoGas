import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {of} from 'rxjs';
import {ConsultarFechasVencimientoMock} from './consultar-fechas-vencimiento-mock';
import {GeneralResponse} from '../../../../../interfaces/general-response';
import {map} from 'rxjs/operators';
import {RecaudadoresData} from '../../../../../interfaces/recaudadores-data';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';
import {ConsultaFechaVencimiento} from '../../../../../interfaces/consulta-fecha-vencimiento-data';

@Injectable({
  providedIn: 'root'
})
export class ConsultarFechasDeVencimientoClientesService {

  constructor(private http: HttpClient) { }
  requestDataTablewithClientCode(
      page: string | null,
      size: string | null,
      idUser: number,
      clientCode: number
    ) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/user/${ idUser }/subscription/lastinvoicexpirationdate`;
    let params;
    if (size || page ) {
      params = new HttpParams({
          fromObject: {
            'size': size,
            'page': page,
          }
        });
    } else {
      params = new HttpParams();
    }
     params = AppConfig.addXParam(params);
    // eturn of(ConsultarFechasVencimientoMock.fechasVencimiento);
   return this.http.post<GeneralResponse>(url,
     {uniqueSubscriptionId: clientCode}, { params: params, observe: 'response'}).pipe(
      map(response => {
        switch (response.status) {
          case 200:
            return <ConsultaFechaVencimiento>response.body.data;
        }
      })
    );
  }

  requestDataTableWithMunicipios(
    page: string | null,
    size: string | null,
    townId: number,
    neighborhoodId: number
  ) {
    const url = `${AppConfig.API_DOMAIN}:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/townneighborhood/route/searchexpiredate`;
    let params;
    if (size || page ) {
      params = new HttpParams({
        fromObject: {
          'size': size,
          'page': page,
        }
      });
    }
     params = AppConfig.addXParam(params);
     // return of(ConsultarFechasVencimientoMock.fechasVencimiento);
        return this.http.post<GeneralResponse>(url,
          {
            townId: Number(townId),
            neighborhoodId: Number(neighborhoodId)
          },
          {params: params, observe: 'response'})
          .pipe(
            map(response => {
              switch (response.status) {
              case 200:
                return <ConsultaFechaVencimiento>response.body.data;
            }
          })
        );
  }
}
