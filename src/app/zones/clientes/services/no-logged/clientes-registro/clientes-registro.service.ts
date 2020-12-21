import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of as observableOf} from 'rxjs';
import {MockRegistroClientes} from './mock-registro-clientes';
import {delay} from 'rxjs/operators';
import {RelacionPropiedad} from '../../../../../interfaces/relacion-propiedad';
// todo validar si este servicio se esta usando
@Injectable()
export class ClientesRegistroService {

  constructor(private http: HttpClient) { }

  getRelacionConPropiedad(): Observable<RelacionPropiedad[]> {
    /*    const url = '';
    return this.http.get(url);*/
    return observableOf(MockRegistroClientes.relacion_propiedad)
      .pipe(delay(1000));
  }
  registerClient(fieldsUser) {
    const url = '';
    return this.http.post(url, fieldsUser);
  }
}
