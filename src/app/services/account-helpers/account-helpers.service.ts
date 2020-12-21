import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../config/app-config';
import {ClientesConfig} from '../../zones/clientes/config/clientes-config';
import {SetPassword} from '../../interfaces/forms/set-password';
import {map} from 'rxjs/operators';
import {GeneralResponse} from '../../interfaces/general-response';

@Injectable({
  providedIn: 'root'
})
export class AccountHelpersService {

  constructor(private http: HttpClient) { }


  requestPassword(email: string, zoneId: number) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ zoneId }/user/rememberpasswordrequest`;
    return this.http.post(url, { email: email }, {params: AppConfig.yParam});
  }

  /**
   * Hacer petición para cambiar la contraseña
   * @param user
   * @param zoneId
   */
  remenberPasswordRequest(user: SetPassword, zoneId: number) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ zoneId }/user/rememberpasswordrequest`;
    return this.http.put<GeneralResponse>(url, user, {observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return response.body;
          }
        })
      );
  }

}
