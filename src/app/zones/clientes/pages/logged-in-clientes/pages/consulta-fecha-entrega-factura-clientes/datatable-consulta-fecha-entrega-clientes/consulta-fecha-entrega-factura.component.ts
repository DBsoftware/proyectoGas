import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ConsultaFechaVencimiento} from '../../../../../../../interfaces/consulta-fecha-vencimiento-data';
import { ConsultarFechasDeVencimientoClientesService } from '../../../../../services/logged-in/consultar-fechas-de-vencimiento-clientes/consultar-fechas-de-vencimiento-clientes.service';
import {PageEvent} from '@angular/material';
import {ConsultaFechaEntregaFacturaDatasource} from './consulta-fecha-entrega-factura-datasource';

@Component({
  selector: 'app-datatable-consultas-fecha-entrega-factura-clientes',
  templateUrl: './datatable-consulta-fecha-entrega-factura.component.html',
  styleUrls: ['./datatable-consulta-fecha-entrega-factura.component.scss']
})
export class DatatableConsultaFechaEntregaComponent implements OnChanges {
  @Input() dataDatable: ConsultaFechaVencimiento;
  @Input() filterbyMunicipio: boolean;
  @Input() userId: number;
  @Input() codigoCliente: string;
  @Input() SelectedIdMunicipio: number;
  @Input() SelectedIdBarrio: number;

  @Input() displayedColumns: string[];
  dataSource = new ConsultaFechaEntregaFacturaDatasource(this._consultas);

  constructor(private _consultas: ConsultarFechasDeVencimientoClientesService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.dataDatable) {
      if (changes.dataDatable.currentValue) {
        this.dataSource.getData(changes.dataDatable.currentValue);
      }
    }
  }

  paginate(event: PageEvent) {
    let metadata;
    if (this.filterbyMunicipio) {
      metadata = {idMunicipio: this.SelectedIdMunicipio, idBarrio: this.SelectedIdBarrio  };
      this.dataSource.paginate(event.pageIndex, event.pageSize, metadata);
    } else {
      metadata = {userId: this.userId, codigoCliente: this.codigoCliente };
      this.dataSource.paginate(event.pageIndex, event.pageSize, metadata);
    }
  }

}
