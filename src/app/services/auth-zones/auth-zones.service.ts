import {Injectable, NgZone} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../config/app-config';
import {LoginUser} from '../../interfaces/login-user';
import {UserRegistrer} from '../../interfaces/forms/user-registrer';
import {map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {GeneralResponse} from '../../interfaces/general-response';
import {LocalStorageService} from '../localstorage/local-storage.service';
import {Router} from '@angular/router';
import {ClientesConfig} from '../../zones/clientes/config/clientes-config';
import {RoutingPathClientes} from '../../zones/clientes/routing-path-clientes';

@Injectable({
  providedIn: 'root'
})
export class AuthZonesService {

  constructor(private http: HttpClient,
              private router: Router,
              private _zone: NgZone,
              private _local: LocalStorageService) { }

  private onUserZoneAuthenticated = new BehaviorSubject<Boolean>(false);
  public onUserZoneAuthenticated$ = this.onUserZoneAuthenticated.asObservable();

  /**
   * Hace una solicitud para que el usuario se logge según su zona
   * @param zonePrefix zone Prefix
   * @param idZona el id de la zona en el cual el usuario se logea
   * @param body password y email para login
   */
  loginZone(zonePrefix: string, idZona: number, body: LoginUser) {
    const  url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ zonePrefix }/company/${ AppConfig.COMPANY_ID }/zone/${ idZona }/user/login`;
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
                this.authUserLocally(token);
              } catch (e) {
                console.error(e.toString()); // todo implement notifications service
              }
              break;
            default:
              return response;
          }
        })
      );
  }
  registrerUserZone(zone: string, zoneId: number, body: UserRegistrer) {
    const  url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ zone }/company/${ AppConfig.COMPANY_ID }/zone/${ zoneId }/user/sign-up`;
    return this.http.post<GeneralResponse>(url, body, {observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 201:
              return response.body;
          }
        })
      );
  }
  /**
   * Guarda el token en el localstorage
   * @param token token a guardar
   */
  private authUserLocally(token: string) {
    localStorage.setItem(AppConfig.x, token.substr(7));
    this.onUserZoneAuthenticated.next(true);
  }

  logout() {
    this.onUserZoneAuthenticated.next(false);
       this._zone.run(async () => {
         try {
           await this._local.removeItem(AppConfig.x);
           await this._local.removeItem(AppConfig.DINAMIC_LOGIN_URL_KEY);
           await this.router.navigateByUrl(`${ await this._local.getItem(AppConfig.LOGIN_URL) }`);
           await this._local.removeItem(AppConfig.LOGIN_URL);
         } catch (e) {
           console.error(e);
         }
      });
  }
}
