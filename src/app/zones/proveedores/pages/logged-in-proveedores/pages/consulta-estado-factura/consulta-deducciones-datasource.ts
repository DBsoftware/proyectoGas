import {DataSource} from '@angular/cdk/table';
import {BehaviorSubject} from 'rxjs';
import {ConsultaEstadoFacturaService} from '../../../../services/consulta-estado-factura/consulta-estado-factura.service';
import {ConsultaDeduccionesTable, RowConsultaDeducciones} from '../../../../../../interfaces/consulta-deducciones-table';
import {ConsultaEstadoFacturaTable} from '../../../../../../interfaces/consulta-estado-factura-table';

export class ConsultaDeduccionesDatasource implements DataSource<RowConsultaDeducciones> {
  data = new BehaviorSubject<any>([]);
  totalElements: number; // total length of items in all pages
  number: number; // indexPage number
  size: number; // items per page
  constructor(private _consultaFactura: ConsultaEstadoFacturaService) {
  }
  getData(fecha_ini: string, fecha_final: string) {
    this._consultaFactura.consultaDeducciones(fecha_ini, fecha_final)
      .subscribe(data => {
        this.handlerMetada(data);
      });
  }
  paginate(fecha_ini: string, fecha_final: string, size: string, page: string) {
    this._consultaFactura.consultaDeducciones(fecha_ini, fecha_final, size, page)
      .subscribe(data => {
        this.handlerMetada(data);
      });
  }
  connect() {
    return this.data.asObservable();
  }
  disconnect() {
    this.data.complete();
  }

  handlerMetada(data: ConsultaDeduccionesTable) {
    this.totalElements = data.totalElements; // total length of items in all pages
    this.number = data.number; // indexPage number
    this.size = data.size; // items per page
    this.data.next(data.content);
  }
}
