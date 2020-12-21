import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../../../config/app-config';
import {UserRegistrer} from '../../../../interfaces/forms/user-registrer';
import {GeneralResponse} from '../../../../interfaces/general-response';
import {BehaviorSubject, Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import {LoginUser} from '../../../../interfaces/login-user';
import {ConfigAdmin} from '../../config/config-admin';

@Injectable()
export class AuthAdminService {

  private onUserAuthenticated = new BehaviorSubject<Boolean>(false);
  public onUserAuthenticated$ = this.onUserAuthenticated.asObservable();

  constructor(private http: HttpClient) { }

  /**
   * Hace una solicitud para crear un usuario
   * @param user
   */
  registerUser(user: UserRegistrer) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/user/sign-up`;
    return this.http.post<GeneralResponse>(url, user);
  }
  /**
   * Hace una solicitud para obtener el token, y luego guarda el token en el
   * localStorage
   * @param loginCredentials usuario y contraseña para solicitar el token
   */
  requestUserToken(loginCredentials: LoginUser): Observable<any> {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ConfigAdmin.ZONE_ID }/user/login`;
    return this.http.post<GeneralResponse>(url, loginCredentials, {observe: 'response'})
      .pipe(
      map((response) => {
        switch (response.status) {
          case 200:
            try {
              const token = response.headers.get('Authorization');
              if (token === null) {
                throw new TypeError('must be of type string, or this is not available');
              }
              this.authUserLocally(token);
            } catch (e) {
              console.error(e.toString()); // todo implement notifications service
            }
            break;
        }
      }
    ));
  }

  /**
   * Guarda el token en el localstorage
   * @param token token a guardar
   */
  private authUserLocally(token: string) {
    localStorage.setItem(AppConfig.x, token.substr(7));
    this.onUserAuthenticated.next(true);
  }

}
