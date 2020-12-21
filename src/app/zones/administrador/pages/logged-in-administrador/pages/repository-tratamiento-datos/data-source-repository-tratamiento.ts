import {DataSource} from '@angular/cdk/table';
import {RowTratamientoData, TratamientoData} from '../../../../../../interfaces/forms/tratamiento-data';
import {BehaviorSubject} from 'rxjs';
import {RepositoryTratamientoService} from '../../../../services/logged-in/pages/repository-tratamiento/repository-tratamiento.service';

export class DataSourceRepositoryTratamiento implements DataSource<RowTratamientoData> {
  /**
   * loading
   */
  private tratamientoDataLoading = new BehaviorSubject<boolean>(false);
  public tratamientoDataLoading$ = this.tratamientoDataLoading.asObservable();
  /**
   * Tratamiento data
   */
  private tratamientoData = new BehaviorSubject<RowTratamientoData[]>([]);
  totalItems: number;
  indexPage: number;
  sizePage: number;

  constructor(private repositoryTratamientoService: RepositoryTratamientoService) {}

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
    this.repositoryTratamientoService.getTratamientoData()
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
    this.repositoryTratamientoService.getTratamientoData(size.toString(), page.toString())
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
