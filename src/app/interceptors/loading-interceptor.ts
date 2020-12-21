import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {LoadingService} from '../services/loading/loading.service';
import { finalize} from 'rxjs/operators';
import {Inject} from '@angular/core';

export class LoadingInterceptor implements HttpInterceptor {
  countRequest = 0;
  countResolveRequest = 0;
  requestSubject = new Subject<number>();
  resolvedRequestSubject = new Subject<number>();
  constructor(@Inject(LoadingService) private _loading: LoadingService) {
    this.countHTTPRequest();
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loading.toogleLoading(true);
    this.requestSubject.next(this.countRequest++);
    return next.handle(req)
      .pipe(
        finalize(() => {
            this.resolvedRequestSubject.next(this.countResolveRequest++);
          }
          )
      );
  }

  countHTTPRequest() {
    this.requestSubject.subscribe(request => {
      this.resolvedRequestSubject
        .subscribe(resolved => {
          if (this.countRequest === this.countResolveRequest) {
            this._loading.toogleLoading(false);
          }
        });
    });
  }

}
export const LoadingInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoadingInterceptor,
  multi: true,
};
