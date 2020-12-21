import {HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppConfig} from '../config/app-config';
import {MatDialog} from '@angular/material';
import {InfoDialogComponent} from '../shared/info-dialog/info-dialog.component';
import {LocalStorageService} from '../services/localstorage/local-storage.service';
import {RoutingPath} from '../routing-path';
import {RoutingPathClientes} from '../zones/clientes/routing-path-clientes';


export class ErrorResponseInterceptor implements HttpInterceptor {
  statusCode: number;
  constructor(@Inject(Router) private router: Router,
              @Inject(ActivatedRoute) private activeR: ActivatedRoute,
              @Inject(LocalStorageService) private _localStorage: LocalStorageService,
              @Inject(MatDialog) private dialog: MatDialog) {}
  /**
   * Intercepta todas las peticiones y analiza sus errores
   * @param req la solicitud saliente
   * @param next
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError(errResponse => {
            if (errResponse instanceof HttpErrorResponse) {
              this.statusCode = errResponse.status;
              if (this.router.url !== `/${RoutingPath.APP_ROUTING.pages.clientes.path}/${ RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path }/${ RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.iniciar_sesion.path }`) {
                switch (this.statusCode) {
                  case 401: // no esta el token
                  case 403: // el token no es válido o expiró
                    if (!(req.url.endsWith(AppConfig.LOGIN_KEYWORD, req.url.length))) {
                      this.openDialog('la sesión a expirado', '');
                    }
                    return throwError(errResponse);
                  default:
                    if (errResponse.error !== null) {
                      this.openDialog(errResponse.error.message, errResponse.error.errors);
                    }
                }
              }
              return throwError(errResponse);
            }
          }
        ));
  }

  openDialog(title: string, content: any) {
    this.dialog.open(InfoDialogComponent, {
      data: {
        title: title,
        content: content
      }
    }).afterClosed()
      .subscribe( async () => {
        switch (this.statusCode) {
          case 401:
          case 403:
           await this._localStorage.removeItem(AppConfig.x);
            await this._localStorage.removeItem(AppConfig.DINAMIC_LOGIN_URL_KEY);
            this.router.navigateByUrl(await this._localStorage.getItem(AppConfig.LOGIN_URL));
            await  this._localStorage.removeItem(AppConfig.LOGIN_URL);
           // window.location.reload();
            /*this._localStorage.removeItem(AppConfig.x);
              this.router.navigateByUrl(`/${ this._localStorage.getItem(AppConfig.DINAMIC_LOGIN_URL_KEY) }/usuario`)
                .then(() => {
                  this._localStorage.removeItem(AppConfig.DINAMIC_LOGIN_URL_KEY);
                });
              */
        }
        if (content === 'token') {
          if (content[0].objectName)  {
            this.router.navigateByUrl('/');
          }
        }
      });
  }
}
export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorResponseInterceptor,
  multi: true,
};
