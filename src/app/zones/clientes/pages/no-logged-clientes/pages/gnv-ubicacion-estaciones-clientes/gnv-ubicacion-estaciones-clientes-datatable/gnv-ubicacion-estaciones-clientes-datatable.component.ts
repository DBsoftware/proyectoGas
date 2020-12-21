import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {PageEvent} from '@angular/material';
import {GnvUbicaciones, RowGvnUbicaciones} from '../../../../../../../interfaces/gnv-ubicaciones';
import {GnvUbicacionEstacionesService} from '../../../../../services/logged-in/gnv-ubicacion-estaciones/gnv-ubicacion-estaciones.service';
import {GvnUbicacionEstacionesClientesDatasource} from './gvn-ubicacion-estaciones-clientes-datasource';

@Component({
  selector: 'app-gnv-ubicacion-estaciones-clientes-datatable',
  templateUrl: './gnv-ubicacion-estaciones-clientes-datatable.component.html',
  styleUrls: ['./gnv-ubicacion-estaciones-clientes-datatable.component.scss']
})
export class GnvUbicacionEstacionesClientesDatatableComponent implements OnChanges {

  @Input() dataDatable: GnvUbicaciones;
  @Input() metaDataMap: { municipioId: number, estacionId: string };
  @Output() cordenadas = new EventEmitter();
  dataSource = new GvnUbicacionEstacionesClientesDatasource(this._gnvService);

  displayedColumns: string[] = ['estacion', 'municipio', 'direccion', 'telefono', 'acciones'];
  constructor(private _gnvService: GnvUbicacionEstacionesService) { }

  ngOnChanges(changes: SimpleChanges) {
    const data = changes.dataDatable.currentValue;
    if (data) {
      this.dataSource.getData(data);
    }
  }

  paginate(event: PageEvent) {
    this.dataSource.paginate(
      this.metaDataMap.municipioId || null,
      this.metaDataMap.estacionId || null,
      event.pageSize.toString(),
      event.pageIndex.toString()
    );
  }

  showLocation(row: RowGvnUbicaciones) {
    console.log(row);
    this.cordenadas.emit(
      {
        lat: Number(row.latitude),
        long: Number(row.longitude),
        logo: row.imgPath,
        estacion: row.description,
        direccion: row.address,
        telefono: row.phoneNumber,
        isOpen: true
      });
  }
}
