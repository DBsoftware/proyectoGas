import { Injectable } from '@angular/core';
import {Router, CanLoad, CanActivate, Route, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {AppConfig} from '../../config/app-config';
import {LocalStorageService} from '../localstorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export  class AuthLoggedInGuard implements CanActivate {
  constructor(private router: Router,
              private _localStorage: LocalStorageService) {}

  /**
   * Evalua que el token este o si no se redirecciona al home de la zona
   * @param router router of canLoad
   */
  /**
  canLoad(router: Route): Observable<boolean> | Promise<boolean> | boolean {
    const logged = this._localStorage.getItem(AppConfig.x);
     if (logged) {
       if (this._localStorage.getItem(AppConfig.DINAMIC_LOGIN_URL_KEY)) {
          compara si el router esta en la ruta actual para evitar ciclos
        if (router.data.url !== this._localStorage.getItem(AppConfig.DINAMIC_LOGIN_URL_KEY)) {
            this.router.navigateByUrl(`/${ this._localStorage.getItem(AppConfig.DINAMIC_LOGIN_URL_KEY) }`);
            return false;
        }
      }
      return true;
    } else {
      if (this._localStorage.getItem(AppConfig.DINAMIC_LOGIN_URL_KEY)) {
        this.router.navigate([`/${ this._localStorage.getItem(AppConfig.DINAMIC_LOGIN_URL_KEY) }/usuario`]).then(); // si no esta logeado lo mando a usuario
      } else {
        this.router.navigate([`/${ router.data.url }/usuario`]).then(); // si el usuario no esta logeado tengo que saber a donde lo voy a mandar
      }
      return false;
    }
  } /*

  /**
   * Evalua que el token este o si no se redirecciona al home de la zona
   * @param route
   * @param state
   */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const logged =  localStorage.getItem(AppConfig.x);
    if (logged) {
      if (localStorage.getItem(AppConfig.DINAMIC_LOGIN_URL_KEY)) {
        if (route.data.url !== localStorage.getItem(AppConfig.DINAMIC_LOGIN_URL_KEY)) {
          this.router.navigateByUrl(`/${ localStorage.getItem(AppConfig.DINAMIC_LOGIN_URL_KEY) }`);
          return false;
        }
      }
      return true;
    } else {
      if (localStorage.getItem(AppConfig.LOGIN_URL)) {
        /* compara si el router esta en la ruta del guard para evitar ciclos */
        this.router.navigate([`/${ localStorage.getItem(AppConfig.LOGIN_URL) }`]).then();
      } else {
        this.router.navigate([`/${ route.data.url }`]).then();
      }
      return false;
    }

  }

   getDinamicURL() {
    return   localStorage.getItem(AppConfig.DINAMIC_LOGIN_URL_KEY);
  }
}
