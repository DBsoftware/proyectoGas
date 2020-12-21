import { Injectable } from '@angular/core';
import {CanLoad, CanActivate, Route, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {AppConfig} from '../../config/app-config';
import {RoutingPathClientes} from '../../zones/clientes/routing-path-clientes';
import {LocalStorageService} from '../localstorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class  AuthNoLoggedGuard implements CanActivate {
  constructor(private router: Router,
              private _localStorage: LocalStorageService,
              private activated: ActivatedRoute) {}
/**  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    const logged =  this._localStorage.getItem(AppConfig.x); //
    if (!logged || route.data.url === this.dynamicURLKey) {
      return true;
    } else {
      if (this.dynamicURLKey) {
        this.router.navigate([`/${ this.dynamicURLKey }`]).then(); // lo mando al modulo logeado si esta logeado
      } else {
        this.router.navigate([`/${ route.data.url }`]).then();
      }
      return false;
    }
  } **/
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  const userLogged =  localStorage.getItem(AppConfig.x);
  if (!userLogged || (!state.url.endsWith(RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.iniciar_sesion.path, state.url.length ) && userLogged)) {
    return true;
  } else {
    if ( localStorage.getItem(AppConfig.DINAMIC_LOGIN_URL_KEY)) {
      this.router.navigate([`/${  localStorage.getItem(AppConfig.DINAMIC_LOGIN_URL_KEY) }/usuario`]).then();
    } else {
      this.router.navigate([`/${ route.data.url }/usuario`]).then();
    }
    return false;
  }
  }
  getDinamicURL() {
   return   localStorage.getItem(AppConfig.DINAMIC_LOGIN_URL_KEY);
  }
}
