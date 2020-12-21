import {DataSource} from '@angular/cdk/table';
import {BehaviorSubject} from 'rxjs';
import {RecaudadoresData, RowRecaudadoresData} from '../../../../../../../interfaces/recaudadores-data';
import {RecaudadoresClientesService} from '../../../../../services/no-logged/recaudadores-clientes/recaudadores-clientes.service';

export class RecaudadoresClientesDatasource implements DataSource<RowRecaudadoresData> {
  private recaudadoresData = new BehaviorSubject<RowRecaudadoresData[]>([]);
  totalElements: number; // total length of items in all pages
  number: number; // indexPage number
  size: number; // items per page
  constructor(private  _recaudadores: RecaudadoresClientesService) {
  }
  connect() {
    return this.recaudadoresData.asObservable();
  }
  disconnect() {
    this.recaudadoresData.complete();
  }

  public getData(data: RecaudadoresData) {
    this.handlerMetadata(data);
  }

  paginate(categoriaId: number, municipioId: number, entidadId: number, page: string, size: string) {
     this._recaudadores.getDatatableData(categoriaId, municipioId, entidadId, page.toString(), size.toString())
       .subscribe(data => {
         this.handlerMetadata(data);
       });
  }

  private handlerMetadata(data: RecaudadoresData) {
    this.totalElements = data.totalElements;
    this.size = data.size;
    this.number = data.number;
    this.recaudadoresData.next(data.content);
  }
}
