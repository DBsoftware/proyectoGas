import {BehaviorSubject} from 'rxjs';
import {RowTratamientoData, TratamientoData} from '../../../../../../interfaces/forms/tratamiento-data';
import {AutorizacionTratamientoService} from '../../../../services/logged-in/pages/autorizacion-tratamiento/autorizacion-tratamiento.service';
import {DataSource} from '@angular/cdk/table';

export class DatasoourceAutorizacion implements DataSource<RowTratamientoData> {
  /**
   * loading
   */
  private tratamientoDataLoading = new BehaviorSubject<boolean>(false);
  /**
   * Tratamiento data
   */
  private tratamientoData = new BehaviorSubject<RowTratamientoData[]>([]);
  totalItems: number;
  indexPage: number;
  sizePage: number;

  constructor(private _authorizacionTratamientoService: AutorizacionTratamientoService) {}

  /**
   * Retorna la data para mostrarla en el datatable
   */
  connect() {
    return this.tratamientoData.asObservable();
  }
  disconnect() {
    this.tratamientoDataLoading.complete();
    this.tratamientoData.complete();
  }

  /**
   * Makes a request for get data of data table
   */
  getData() {
    this.tratamientoDataLoading.next(true);
    this._authorizacionTratamientoService.getTratamientoData()
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
    this.tratamientoDataLoading.next(true);
    this._authorizacionTratamientoService.getTratamientoData(size.toString(), page.toString())
      .subscribe(rows => {
        this.handlerMetadata(rows);
      });
  }
  private  handlerMetadata(data: TratamientoData) {
    this.totalItems = data.totalElements;
    this.sizePage = data.size;
    this.indexPage = data.number;
    this.tratamientoData.next(data.content);
    this.tratamientoDataLoading.next(false);
  }

}
