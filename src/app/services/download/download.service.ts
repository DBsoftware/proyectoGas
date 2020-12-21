import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AppConfig} from '../../config/app-config';
import {GeneralResponse} from '../../interfaces/general-response';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(
    private http: HttpClient,
  ) {
  }
  viewFileNoLogged(url: string, isLogged: boolean, code?: string | null): Observable<any> {
    if (code) {
      return this.http.post(url, {userSuscription: code },
        { reportProgress: true, observe: 'response', params: AppConfig.yParam})
        .pipe(
          map(response => {
            return response.body;
          })
        );
    }  else {
      return this.http.get(url, {reportProgress: true, observe: 'response', responseType: 'blob', params: AppConfig.yParam})
        .pipe(
          map(response => {
            return response.body;
          })
        );
    }
  }

  downloadFactura(invoiceNumber: string, companyNumber: string, ip: string) {
    const body = new HttpParams()
      .set('POST_PR_INT_NUMERO_FACTURA', invoiceNumber)
      .set('POST_PR_STR_INT_EMPRESA', companyNumber);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let url: string;
    if (ip === AppConfig.GRUPO_DEL_LLANO_PUBLIC_IP)  {
      url = AppConfig.INSIDE_GRUPO_DEL_LLANO_DOWNLOAD_FACTURA_DOMAIN;
    } else {
      url = AppConfig.DOWNLOAD_FACTURA_DOMAIN;
    }
    return this.http.post(url,
      body.toString(),
      { headers, observe: 'response', responseType: 'blob' }
      ).pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return response;
            case 204:
              return 'Sin resultados';
          }
        })
    );
  }
  downloaFacturaEstadoCuentaFinanciacion(ip: string, codigoSuscripcion: string, idUsuario: string, clientName: string, initFecha: string, endFecha: string) {
    const object = {
      jndi: 'java:/PoolWeb',
      format: 'pdf',
      reportName: '/var/www/html/ReportesAchagua/resumen_estado_cuenta_version_2.jrxml',
      parameters: {
        PR_STR_CODIGO_ANTERIOR: idUsuario,
        PR_INT_ID_SUSCRIPCION: codigoSuscripcion,
        PR_INT_TIPO: 0,
        PR_STR_FECHA_INICIO: initFecha,
        PR_STR_FECHA_FINAL: endFecha,
        PR_INT_EMPRESA: AppConfig.COMPANY_ID,
        PR_STR_TITULO_REPORTE: 'Informe de estado de cuenta',
        PR_STR_TITULO_EMPRESA: AppConfig.APP_NAME,
        PR_STR_ROOT_PATH: '/var/www/html/ReportesAchagua/',
        PR_STR_IMAGES_PATH: '/var/www/html/ReportesAchagua/',
        PR_STR_USUARIO: clientName,
        PR_STR_USUARIO_CARGO: 'Cuenta Cliente Web'
      }
      };
    let url: string;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (ip === AppConfig.INSIDE_GRUPO_DEL_LLANO_IP) {
        url = `http://${ AppConfig.INSIDE_GRUPO_DEL_LLANO_IP }/JasperRecibo-1.0-SNAPSHOT/ws/ConsultasReciboJsonWS`;
    } else {
      url = `http://${ AppConfig.PUBLIC_IP_ESTADO_CUENTA_FINANCIACION }/JasperRecibo-1.0-SNAPSHOT/ws/ConsultasReciboJsonWS`;
    }
    return this.http.post<GeneralResponse>(url, object, { observe: 'response', headers: headers})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return response.body.data;
            case 204:
              return null;
          }
        })
      );
  }
  downloadPlanilla() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/vnd.ms-excel' });
    const url = ``;
    return this.http.post<GeneralResponse>(url, {}, { observe: 'response', headers: headers, params: AppConfig.xParam});
  }
   doDownloadManual(rawFile: any, filename: string) {
    const auxLink = document.createElement('a');
      document.body.appendChild(auxLink);
    const url = window.URL.createObjectURL(new Blob([rawFile], {type: 'application/pdf'}));
     auxLink.href = url;
     auxLink.download = filename;
     auxLink.click();
     window.URL.revokeObjectURL(url);
  }

}

