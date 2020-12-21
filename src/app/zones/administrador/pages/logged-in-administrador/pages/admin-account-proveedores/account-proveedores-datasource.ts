import {DataSource} from '@angular/cdk/table';
import {BehaviorSubject, Observable} from 'rxjs';
import {ActiveAccountProveedoresService} from '../../../../services/logged-in/pages/active-account-proveedores/active-account-proveedores.service';
import {RowAdminProveedores, TableAdminProveedores} from '../../../../../../interfaces/table-admin-proveedores';

export class AccountProveedoresDatasource  implements DataSource<RowAdminProveedores> {
  private data = new BehaviorSubject<RowAdminProveedores[]>([]);
  totalItems: number;
  indexPage: number;
  sizePage: number;
  constructor(private _activeAccount: ActiveAccountProveedoresService) {
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
    this._activeAccount.getProveedores('', '5', '0')
      .subscribe(rows => {
        this.handlerMetadata(rows);
      });
  }

  searchTerm(term: Observable<string>) {
    this._activeAccount.searchTerms(term)
      .subscribe(data => {
        this.handlerMetadata(data);
      });
  }

  /**
   *
   * @param page index of page
   * @param size size of items
   */
  paginate(page: number, size: number) {
    this._activeAccount.getProveedores(null, size.toString(), page.toString())
      .subscribe(rows => {
        this.handlerMetadata(rows);
      });
  }

  private  handlerMetadata(data: TableAdminProveedores) {
    this.totalItems = data.totalElements;
    this.sizePage = data.size;
    this.indexPage = data.number;
    this.data.next(data.content);
  }

}
