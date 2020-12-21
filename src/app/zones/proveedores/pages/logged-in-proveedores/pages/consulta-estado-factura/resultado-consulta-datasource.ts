import {DataSource} from '@angular/cdk/table';
import {BehaviorSubject} from 'rxjs';
import {ConsultaEstadoFacturaService} from '../../../../services/consulta-estado-factura/consulta-estado-factura.service';
import {ConsultaEstadoFacturaTable, RowConsultaEstadoFacturaTable} from '../../../../../../interfaces/consulta-estado-factura-table';

export class ResultadoConsultaDatasource implements DataSource<RowConsultaEstadoFacturaTable> {
  data = new BehaviorSubject<any>([]);
  totalElements: number; // total length of items in all pages
  number: number; // indexPage number
  size: number; // items per page
  constructor(private _consultaFactura: ConsultaEstadoFacturaService) {

  }
  connect() {
    return this.data.asObservable();
  }
  disconnect() {
    this.data.complete();
  }

  getData(fecha_ini: string, fecha_final: string) {
    this._consultaFactura.consutaEstadoFactura(fecha_ini, fecha_final)
      .subscribe(data => {
        this.handlerMetada(data);
      });
  }

  paginate(fecha_ini: string, fecha_final: string, size: string, page: string) {
    this._consultaFactura.consutaEstadoFactura(fecha_ini, fecha_final, size, page)
      .subscribe(data => {
        this.handlerMetada(data);
      });
  }
  handlerMetada(data: ConsultaEstadoFacturaTable) {
    this.totalElements = data.totalElements; // total length of items in all pages
    this.number = data.number; // indexPage number
    this.size = data.size; // items per page
    this.data.next(data.content);
  }
}
