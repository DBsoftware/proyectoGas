import {DataSource} from '@angular/cdk/table';
import {BehaviorSubject} from 'rxjs';
import {Codes, RowCodes} from '../../../../services/logged-in/manage-codes-clientes/manage-users';
import {ManageCodesClientesService} from '../../../../services/logged-in/manage-codes-clientes/manage-codes-clientes.service';

export class DataSourceCodigosSucripcion implements DataSource<RowCodes> {
  private data = new BehaviorSubject<RowCodes[]>([]);
  totalItems: number;
  indexPage: number;
  sizePage: number;
  constructor(private _manageCodes: ManageCodesClientesService) {}
  connect() {
    return this.data.asObservable();
  }
  disconnect() {
    this.data.complete();
  }

  public getData(userId: number) {
    this._manageCodes.getUserSuscription(userId)
      .subscribe(rows => {
        this.handlerMetadata(rows);
      });
  }

  public paginate(userId: number, size?: string, page?: string) {
    this._manageCodes.getUserSuscription(userId, size, page)
      .subscribe(rows => {
        this.handlerMetadata(rows);
      });
  }

  private  handlerMetadata(data: Codes) {
    this.totalItems = data.totalElements;
    this.sizePage = data.size;
    this.indexPage = data.number;
    this.data.next(data.content);
  }
}
