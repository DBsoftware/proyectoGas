import {DataSource} from '@angular/cdk/table';
import {ContentFactura, EnvioFacturaCorreo} from '../../../../../../interfaces/envio-factura-correo';
import {BehaviorSubject, of as observableOf} from 'rxjs';
import {EnvioFacturaMock} from '../../../../services/logged-in/envio-factura-medio-correo-clientes/envio-factura-mock';
import {EnvioFacturaMedioCorreoClientesService} from '../../../../services/logged-in/envio-factura-medio-correo-clientes/envio-factura-medio-correo-clientes.service';
import {delay} from 'rxjs/operators';
import {UserClientesService} from '../../../../services/user-clientes/user-clientes.service';
import {CodigoCliente} from '../../../../../../interfaces/forms/codigo-cliente';
import {CodigoSuscripcion} from '../../../../../../interfaces/codigo-suscripcion';

export class EnvioFacturaMedioCorreoDatasource implements DataSource<CodigoSuscripcion> {
  data = new BehaviorSubject<CodigoSuscripcion[]>([]);
  totalElements: number; // total length of items in all pages
  number: number; // indexPage number
  size: number; // items per page
  /**
   * Retorna la data para mostrarla en el datatable
   */
  constructor(private _user: UserClientesService) {
  }
  connect() {
    return this.data.asObservable();
  }
  disconnect() {
    this.data.complete();
  }
  public getData(data: CodigoSuscripcion[]) {
    this.data.next(data);
  }
  private handlerMetadata(data: CodigoSuscripcion[]) {
    /* this.totalElements = data.totalElements;
    this.size = data.size;
    this.number = data.number; */
    this.data.next(data);
  }
}
