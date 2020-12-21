import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../config/clientes-config';
import {ActiveAccount} from '../../../../../interfaces/forms/active-account';

@Injectable({providedIn: 'root'})
export class ActiveAccountClientesService {

  constructor(private http: HttpClient) { }

  activeAccount(user: ActiveAccount, userId: number, zoneId: number) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ zoneId }/user/${ userId }/activate`;
    return this.http.put(url, user, {params: AppConfig.yParam});
  }
}
