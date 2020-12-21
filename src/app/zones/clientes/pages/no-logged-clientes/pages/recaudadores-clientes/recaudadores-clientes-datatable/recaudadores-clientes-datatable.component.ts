import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {RecaudadoresClientesDatasource} from './recaudadores-clientes-datasource';
import {RecaudadoresClientesService} from '../../../../../services/no-logged/recaudadores-clientes/recaudadores-clientes.service';
import {PageEvent} from '@angular/material';
import {RecaudadoresData, RowRecaudadoresData} from '../../../../../../../interfaces/recaudadores-data';

@Component({
  selector: 'app-recaudadores-clientes-datatable',
  templateUrl: './recaudadores-clientes-datatable.component.html',
  styleUrls: ['./recaudadores-clientes-datatable.component.scss']
})
export class RecaudadoresClientesDatatableComponent implements OnChanges {

  @Input() dataDatable: RecaudadoresData;
  @Input() metaDataMap: { categoriaId: number, municipioId: number, entidadId: number };
  @Output() cordenadas = new EventEmitter();

  dataSource = new RecaudadoresClientesDatasource(this._recaudadores);
  displayedColumns: string[] = ['entidad', 'municipio', 'direccion', 'telefono', 'acciones'];
  constructor(private _recaudadores: RecaudadoresClientesService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.dataDatable)  {
      const data = changes.dataDatable.currentValue;
      if (data) {
        this.dataSource.getData(data);
      }
    }
  }

  paginate(event: PageEvent) {
    this.dataSource.paginate(
      this.metaDataMap.categoriaId || null,
      this.metaDataMap.municipioId || null,
      this.metaDataMap.entidadId || null,
      event.pageSize.toString(),
      event.pageIndex.toString());
  }

  showLocation(row: RowRecaudadoresData) {
    this.cordenadas.emit(
      {
        lat: Number(row.latitude),
        long: Number(row.longitude),
        logo: row.status,
        entidad: row.description,
        direccion: row.address,
        horarios: row.address,
        telefono: row.phoneNumber,
        pathImg: row.pathImg,
        isOpen: true
      });
  }

}
