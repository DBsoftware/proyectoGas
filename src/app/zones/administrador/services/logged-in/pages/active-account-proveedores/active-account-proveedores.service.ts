import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Sort} from '../../../../../../interfaces/sort';
import {AppConfig} from '../../../../../../config/app-config';
import {GeneralResponse} from '../../../../../../interfaces/general-response';
import {debounceTime, delay, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {ProveedoresConfig} from '../../../../../proveedores/config/proveedores-config';
import {TableAdminProveedores} from '../../../../../../interfaces/table-admin-proveedores';
import {DataProveedores} from '../../../../../../interfaces/data-proveedores';

@Injectable({
  providedIn: 'root'
})
export class ActiveAccountProveedoresService {

  constructor(private  http: HttpClient) { }
  getProveedores(search: string | null, size?: string | null, page?: string | null, sort?: Sort) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ProveedoresConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/user/paged`;
    let params: HttpParams;
    if (sort) {
      params = new HttpParams({
          fromObject: {
            'size': size || null,
            'page': page || null,
            'sort': `${ sort.property },${ sort.direction }`
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
    return this.http.post<GeneralResponse>(url, {containing: search }, {params: params, observe: 'response'})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <TableAdminProveedores>response.body.data;
          }
        })
      );
   // return of(ActiveAccountProveedoresMock.proveedoresData).pipe(delay(1000));
  }

  searchTerms(terms: Observable<string>) {
    return terms
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term => this.getProveedores(term, '10', '0'))
      );
  }


  activeAccount(userId: number) {
      const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${  ProveedoresConfig.ZONE_PREFIX  }/company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/user/${ userId }/sendactivation`;
    return this.http.post<GeneralResponse>(url, {}, {observe: 'response', params: AppConfig.xParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return response.body;
          }
        })
      );
  }

  getProviderData(userId: number) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${  ProveedoresConfig.ZONE_PREFIX  }/company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/user/${ userId }/detail`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.xParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <DataProveedores>response.body.data;
          }
        })
      );
  }

}
