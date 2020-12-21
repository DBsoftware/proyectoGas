import {DataSource} from '@angular/cdk/table';
import {DataAccountProveedores, RowDataAccountProveedores} from '../../../../../../interfaces/data-account-proveedores';
import {RowTableEvaluacion, TableEvaluacion} from '../../../../../../interfaces/table-evaluacion';
import {BehaviorSubject} from 'rxjs';
import {EvaluacionDesempenoService} from '../../../../services/logged-in/pages/evaluacion-desempeno/evaluacion-desempeno.service';
import {EvaluacionTable, RowEvaluacion} from '../../../../../../interfaces/evaluacion';

export class EvaluacionDesempenoDatasource implements DataSource<RowEvaluacion> {
  private data = new BehaviorSubject<RowEvaluacion[]>([]);
  totalItems: number;
  indexPage: number;
  sizePage: number;
  constructor(private _evaluacion: EvaluacionDesempenoService) {
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
  getData(size?: string, page?: string) {
    this._evaluacion.getTableEvaluacion(size, page)
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
    this._evaluacion.getTableEvaluacion(size.toString(), page.toString())
      .subscribe(rows => {
        this.handlerMetadata(rows);
      });
  }

  private  handlerMetadata(data: EvaluacionTable) {
    this.totalItems = data.totalElements;
    this.sizePage = data.size;
    this.indexPage = data.number;
    this.data.next(data.content);
  }
}
