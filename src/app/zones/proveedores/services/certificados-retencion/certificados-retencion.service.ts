import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CertificadosRetencionService {

  constructor(private http: HttpClient) { }
  getPDF(año: any, certificado: any) {

  }
}
