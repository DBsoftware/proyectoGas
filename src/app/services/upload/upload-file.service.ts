import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpEventType,
  HttpHeaders,
  HttpParams,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {delay, last, map, tap} from 'rxjs/operators';
import {AppConfig} from '../../config/app-config';
import {GeneralResponse} from '../../interfaces/general-response';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  progress: number;

  constructor(private http: HttpClient) { }

  /**
   * Hace una solicitud para subir un archivo al servidor,
   * Este método puede cambiar según la configuración del servidor que se este usando
   * @param file el archivo del input a subir
   * @param url la url del servidor a subir
   */
  uploadFile(file: File, url: string) {
      const formData: FormData = new FormData();
      formData.append('file', file);

      const req = new HttpRequest(
        'POST',
        url,
        formData,
        {
          reportProgress: true,
          params: new HttpParams( {fromObject: AppConfig.yParam})
        }
      );
      return this.http.request<GeneralResponse>(req)
        .pipe(
          tap(event => this.getProggress(event)),
          last(),
          map(response => {
            switch (response.type) {
              case HttpEventType.Response:
                return  response.body;
            }
          })
        );
  }

  public getProggress(event: any) {
    switch (event.type) {
      case HttpEventType.UploadProgress:
       this.progress = Math.round(100 * event.loaded / event.total);
    }
  }
}
