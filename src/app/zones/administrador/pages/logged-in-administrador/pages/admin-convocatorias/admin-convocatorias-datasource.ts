import {BehaviorSubject} from 'rxjs';
import {DataAccountProveedores, RowDataAccountProveedores} from '../../../../../../interfaces/data-account-proveedores';
import {DataSource} from '@angular/cdk/table';
import {EvaluacionDesempenoService} from '../../../../services/logged-in/pages/evaluacion-desempeno/evaluacion-desempeno.service';
import {RowTableEvaluacion} from '../../../../../../interfaces/table-evaluacion';
import {ConvocatoriaService} from '../../../../services/logged-in/pages/convocatoria/convocatoria.service';
import {ConvocatoriasTable, RowConvocatoriasTable} from '../../../../../../interfaces/convocatorias';

export class AdminConvocatoriasDatasource implements DataSource<RowConvocatoriasTable> {
  private data = new BehaviorSubject<RowConvocatoriasTable[]>([]);
  totalItems: number;
  indexPage: number;
  sizePage: number;
  constructor(private _convocatorias: ConvocatoriaService) {
  }
  connect() {
    return this.data.asObservable();
  }
  disconnect() {
    this.data.complete();
  }

  /**
   * Makes a request for get data of data table
   */
  getData() {
    this._convocatorias.getTableConvocatoria()
      .subscribe(rows => {
        this.handlerMetadata(rows);
      });
  }

  /**
   *
   * @param page index of page
   * @param size size of items
   */
  paginate(page: number, size: number) {
    this._convocatorias.getTableConvocatoria(size.toString(), page.toString())
      .subscribe(rows => {
        this.handlerMetadata(rows);
      });
  }

  private  handlerMetadata(data: ConvocatoriasTable) {
    this.totalItems = data.totalElements;
    this.sizePage = data.size;
    this.indexPage = data.number;
    this.data.next(data.content);
  }

}
