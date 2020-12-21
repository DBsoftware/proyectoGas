import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {MatDialog, MatSlideToggle, PageEvent} from '@angular/material';
import {AccountProveedoresDatasource} from './account-proveedores-datasource';
import {ActiveAccountProveedoresService} from '../../../../services/logged-in/pages/active-account-proveedores/active-account-proveedores.service';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {AppConfig} from '../../../../../../config/app-config';
import {RowDataAccountProveedores} from '../../../../../../interfaces/data-account-proveedores';
import {InfoDialogComponent} from '../../../../../../shared/info-dialog/info-dialog.component';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {RowAdminProveedores} from '../../../../../../interfaces/table-admin-proveedores';
import {AccountHelpersService} from '../../../../../../services/account-helpers/account-helpers.service';
import {ProveedoresConfig} from '../../../../../proveedores/config/proveedores-config';
import {ModalRegisterProveedoresComponent} from './modal-register-proveedores/modal-register-proveedores.component';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-admin-account-proveedores',
  templateUrl: './admin-account-proveedores.component.html',
  styleUrls: ['./admin-account-proveedores.component.scss']
})
export class AdminAccountProveedoresComponent implements OnInit, AfterViewInit {
  @ViewChildren(MatSlideToggle) sliders: QueryList<MatSlideToggle>;
  dataSource = new AccountProveedoresDatasource(this._accountProve);
  displayedColumns: string[] = ['companyName', 'identification', 'names_owner', 'email_owner',  'address', 'acciones'];
  searchTerm$ = new Subject<string>();

  constructor(private _accountProve: ActiveAccountProveedoresService,
              private _account: AccountHelpersService,
              private dialog: MatDialog) {

  }

  ngOnInit() {
    this.dataSource.getData();
    this.dataSource.searchTerm(this.searchTerm$);
  }

  ngAfterViewInit() {
    /** Recorre todos los sliders y desactiva el drag y el toogle **/
    this.sliders.changes
      .subscribe(() => {
        this.sliders.toArray()
          .forEach(slide => {
            slide.defaults.disableDragValue = true;
            slide.defaults.disableToggleValue = true;
          });
      });
  }

  paginate(event: PageEvent) {
    this.dataSource.paginate(event.pageIndex, event.pageSize);
  }


  applyFilter(term: string) {
    this.searchTerm$.next(term);
  }





  viewPofileData(row: RowAdminProveedores) {
    this.confirmDialog('Confirmar acción',
      `¿Confirma ver los datos del usuario?`)
      .afterClosed()
      .subscribe(result => {
        console.log(result);
        this.dialog.open(
          ModalRegisterProveedoresComponent,
          {
            minHeight: '70vh',
            maxHeight: '90vh',
            minWidth: '90vw',
            data: row.id
          });
       /** if (result) {
          this._accountProve.sendEmail(1, '')
            .subscribe(data => {
              this.infoDialog(data.message, data.errors);
              this.dataSource.getData();
              console.log(data);
            });
        } **/
      });
  }

  confirmSendPasswordEmail(row: RowAdminProveedores) {
    this.confirmDialog('Confirmar acción',
      `¿Desea enviar un e-mail para que el usuario pueda cambiar su contraseña?`)
      .afterClosed()
      .subscribe(result => {
        console.log(result);
        if (result) {
          this._account.requestPassword(row.companyUser.email, ProveedoresConfig.ZONE_ID)
            .subscribe(data => {
              this.infoDialog(data['message'], '');
            });
        }
      });
  }

  sendActivateLink(row: RowAdminProveedores) {
    this.confirmDialog('Confirmar acción',
      `¿Desea enviar un e-mail para que el usuario pueda activar su cuenta?`)
      .afterClosed()
      .subscribe(result => {
        console.log(result);
        if (result) {
          this._accountProve.activeAccount(row.companyUser.userId)
            .subscribe(data => {
              this.infoDialog(data.message, data.errors);
            });
        }
      });
  }

  confirmDialog(title: string, message: string) {
    return this.dialog.open(DialogConfirmComponent, {
      data: {
        title: title,
        content: message
      }
    });
  }

  infoDialog(title: string, content: any) {
    this.dialog.open(InfoDialogComponent, {
      data: {
        title: title,
        content: content
      }
    });
  }

}
