import {BehaviorSubject} from 'rxjs';
import {DataSource} from '@angular/cdk/table';
import {GnvUbicacionEstacionesService} from '../../../../../services/logged-in/gnv-ubicacion-estaciones/gnv-ubicacion-estaciones.service';
import {RowGvnUbicaciones} from '../../../../../../../interfaces/gnv-ubicaciones';

export class GvnUbicacionEstacionesClientesDatasource implements DataSource<any> {
  private data = new BehaviorSubject<RowGvnUbicaciones[]>([]);
  totalElements: number; // total length of items in all pages
  number: number; // indexPage number
  size: number; // items per page
  constructor(private _gnvService: GnvUbicacionEstacionesService) {
  }
  connect() {
    return this.data.asObservable();
  }
  disconnect() {
    this.data.complete();
  }

  public getData(data: any) {
    this.handlerMetadata(data);
  }

  paginate(municipioId: number, estacion: string, page: string, size: string) {
    this._gnvService.getDatatableData(municipioId, estacion, page.toString(), size.toString())
      .subscribe(data => {
        this.handlerMetadata(data);
      });
  }

  private handlerMetadata(data: any) {
    this.totalElements = data.totalElements;
    this.size = data.size;
    this.number = data.number;
    this.data.next(data.content);
  }
}
