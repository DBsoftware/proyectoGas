import {DataSource} from '@angular/cdk/table';
import {BehaviorSubject } from 'rxjs';
import {ConsultaFechaVencimiento, ConsultaFechaVencimientoData} from '../../../../../../../interfaces/consulta-fecha-vencimiento-data';
import {ConsultarFechasDeVencimientoClientesService} from '../../../../../services/logged-in/consultar-fechas-de-vencimiento-clientes/consultar-fechas-de-vencimiento-clientes.service';

export class ConsultaFechaEntregaFacturaDatasource implements DataSource<ConsultaFechaVencimientoData> {
  private consultaFechas = new BehaviorSubject<ConsultaFechaVencimientoData[]>([]);
  totalElements: number; // total length of items in all pages
  number: number; // indexPage number
  size: number; // items per page
  constructor(private  _consultaFechas: ConsultarFechasDeVencimientoClientesService) {
  }
  connect() {
    return this.consultaFechas.asObservable();
  }
  disconnect() {
    this.consultaFechas.complete();
  }

  public getData(data: ConsultaFechaVencimiento) {
    this.handlerMetadata(data);
  }

  paginate(page: number | null, size: number | null, metadata: any) {
    /* observableOf(ConsultarFechasVencimientoMock.fechasVencimiento)
       .subscribe(data => {
         this.handlerMetadata(data);
       }); */
    if (metadata.codigoCliente) {
      this._consultaFechas.requestDataTablewithClientCode(page.toString(), size.toString(),  metadata.userId, metadata.codigoCliente)
        .subscribe(rows => {
          this.handlerMetadata(rows);
        });
    } else {
      this._consultaFechas.requestDataTableWithMunicipios( page.toString(), size.toString(), metadata.idMunicipio, metadata.idBarrio)
        .subscribe(rows => {
          this.handlerMetadata(rows);
        });
    }

  }

  private handlerMetadata(data: ConsultaFechaVencimiento) {
    this.totalElements = data.totalElements;
    this.size = data.size;
    this.number = data.number;
    this.consultaFechas.next(data.content);
  }
}
