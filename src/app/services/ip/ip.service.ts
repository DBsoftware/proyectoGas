import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../config/app-config';
import {GeneralResponse} from '../../interfaces/general-response';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private http: HttpClient) { }
  getIp() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/helper/request/ip`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.yParam})
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
