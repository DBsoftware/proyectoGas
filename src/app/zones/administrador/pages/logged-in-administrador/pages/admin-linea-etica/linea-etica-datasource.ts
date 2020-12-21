import {DataSource} from '@angular/cdk/table';
import {BehaviorSubject} from 'rxjs';
import {LineaEticaTable, RowTableEtica} from '../../../../../../interfaces/linea-etica-table';
import {AdmLineaEticaService} from '../../../../services/logged-in/pages/adm-linea-etica/adm-linea-etica.service';

export class LineaEticaDatasource implements DataSource<RowTableEtica> {
  private data = new BehaviorSubject<RowTableEtica[]>([]);
  totalItems: number;
  indexPage: number;
  sizePage: number;
  constructor(private _admLinea: AdmLineaEticaService) {
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
    this._admLinea.getTableEvaluacion(size, page)
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
    this._admLinea.getTableEvaluacion(size.toString(), page.toString())
      .subscribe(rows => {
        this.handlerMetadata(rows);
      });
  }

  private  handlerMetadata(data: LineaEticaTable) {
    this.totalItems = data.totalElements;
    this.sizePage = data.size;
    this.indexPage = data.number;
    this.data.next(data.content);
  }
}
