import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ManageCodesClientesService} from '../../../../../services/logged-in/manage-codes-clientes/manage-codes-clientes.service';
import {DataSourceCodigosSucripcion} from '../datasource-codigos-suscripcion';
import {RowCodes} from '../../../../../services/logged-in/manage-codes-clientes/manage-users';
import {MatDialog, PageEvent} from '@angular/material';
import {EditCodeDialogComponent} from '../edit-code-dialog/edit-code-dialog.component';
import {AddCodeDialogComponent} from '../add-code-dialog/add-code-dialog.component';
import {DialogConfirmComponent} from '../../../../../../../shared/dialog-confim/dialog-confirm.component';
import {UserClientesService} from '../../../../../services/user-clientes/user-clientes.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnChanges {
  @Input() userId: number;
  constructor(public _manageUsers: ManageCodesClientesService,
              private dialog: MatDialog) { }
  dataSource: DataSourceCodigosSucripcion = new DataSourceCodigosSucripcion(this._manageUsers);
  displayedColumns: string[] = ['relacion', 'codigo', 'direccion', 'acciones'];

  ngOnChanges(changes: SimpleChanges) {
    if (changes.userId.currentValue) {
      this.userId = changes.userId.currentValue;
      this.dataSource.getData(this.userId);
    }
  }

  removeRow(row: RowCodes) {
    this.dialog.open(DialogConfirmComponent,
      {
        data:
          {
            title: 'Confirmar acción',
            content: `¿Seguro que desea eliminar el código de suscripción ${ row.code } ?`
          }
      }).afterClosed()
      .subscribe(result => {
        if (result) {
        }
      });
  }

  paginate(event: PageEvent) {
    this.dataSource.paginate(this.userId, event.pageSize.toString(), event.pageIndex.toString());
  }
  openEditDialog(row: RowCodes) {
    console.log(row);
    this.dialog.open(EditCodeDialogComponent,
      {
        minWidth: '70vw',
        minHeight: '58vh',
        data: Object.assign(row, {userId: this.userId})
    })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.dataSource.getData(this.userId);
        }
      });
  }

  addCode() {
    this.dialog.open(AddCodeDialogComponent,
      {
        minWidth: '70vw',
        minHeight: '58vh',
        data: {userId: this.userId}
      })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.dataSource.getData(this.userId);
        }
      });
  }

}
