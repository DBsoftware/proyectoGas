import {Inject, Injectable} from '@angular/core';
import {
  HttpEvent, HttpInterceptor,
  HttpHandler,
  HttpRequest, HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppConfig} from '../config/app-config';
import {LocalStorageService} from '../services/localstorage/local-storage.service';
import {Router} from '@angular/router';
import {RoutingPath} from '../routing-path';
import {RoutingPathClientes} from '../zones/clientes/routing-path-clientes';


@Injectable()
export class LoggedInterceptor implements HttpInterceptor {
  constructor(@Inject(LocalStorageService) private _localStorage: LocalStorageService,
              @Inject(Router) private router: Router) {
  }

  /**
   * Intercepta todas las peticiones de la aplicación,
   * si existe el token de login, este se setea a todas las peticiones
   * siguientes
   * @param request actual petición
   * @param next handler
   */
   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const local = localStorage.getItem(request.params.get(AppConfig.zValue));
    if (local && AppConfig.DOWNLOAD_FACTURA_DOMAIN !==  request.url ) {
      let currentParams: HttpParams  = request.params;
      currentParams = currentParams.delete(AppConfig.zValue);
      const clonereq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${local}`
        },
        params: currentParams,
        withCredentials: true
      });
      return next.handle(clonereq);
    }
    return next.handle(request);
 /*     .pipe(
        map((data) => {
        if (data instanceof HttpResponse) {
          debugger
          console.log(data.headers.get('Authorization'));
          const hola = data.clone();
          console.log(hola.headers.get('Authorization'));
          return data;
        }
      }));*/
  }
}
