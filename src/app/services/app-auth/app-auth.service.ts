import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../config/app-config';
import {LoginUser} from '../../interfaces/login-user';
import {map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {LocalStorageService} from '../localstorage/local-storage.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppAuthService {

  constructor(private http: HttpClient,
              private router: Router,
              private _local: LocalStorageService) { }

  private onAppAuthenticated = new BehaviorSubject<Boolean>(false);
  public onAppAuthenticated$ = this.onAppAuthenticated.asObservable();

  /**
   * Autentica la app
   * @param zonePrefix zone Prefix
   * @param idZona el id de la zona en el cual el usuario se logea
   * @param body password y email para login
   */
  login(zonePrefix: string, idZona: number, body: LoginUser) {
    const  url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ zonePrefix }/company/${ AppConfig.COMPANY_ID }/zone/${ idZona }/user/login`;
    console.log(url);
    return this.http.post(url, body, {observe: 'response'})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              try {
                const token = response.headers.get('Authorization');
                if (token === null) {
                  throw new TypeError('must be of type string, or this is not available');
                }
                this.authAppLocally(token);
              } catch (e) {
                console.error(e.toString()); // todo implement notifications service
              }
              break;
            default:
              console.error('app not authenticated');
              break;
          }
          return response;
        })
      );
  }
  /**
   * Guarda el token en el localstorage
   * @param token token a guardar
   */
  private async authAppLocally(token: string) {
    try {
       await this._local.setItem(AppConfig.yValue, token.substr(7));
      this.onAppAuthenticated.next(true);
    } catch (e) {
      console.error(e);
    }
  }
}
