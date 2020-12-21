import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {of} from 'rxjs';
import {ConsultaFacturaMock} from './consulta-factura-mock';

@Injectable({
  providedIn: 'root'
})
export class ConsultaEstadoFacturaService {

  constructor(private http: HttpClient) { }
  consutaEstadoFactura(fecha_inicial: string, fecha_final: string, size?: string, page?: string) {
    let params;
    if (size || page ) {
      params =  new HttpParams({
          fromObject: {
            'size': size || null,
            'page': page || null,
          }
        }
      );
    }
    return of(ConsultaFacturaMock.consultaFactura);
  }
  consultaDeducciones(fecha_inicial: string, fecha_final: string, size?: string, page?: string) {
    const  url = ``;
    let params;
    if (size || page ) {
      params =  new HttpParams({
          fromObject: {
            'size': size || null,
            'page': page || null,
          }
        }
      );
    }
    return of(ConsultaFacturaMock.consultaDeducciones);
  }
}
