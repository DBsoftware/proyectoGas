import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {MatDialog, MatSlideToggle, PageEvent} from '@angular/material';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {EnvioFacturaMedioCorreoDatasource} from './envio-factura-medio-correo-datasource';
import { EnvioFacturaMedioCorreoClientesService } from '../../../../services/logged-in/envio-factura-medio-correo-clientes/envio-factura-medio-correo-clientes.service';
import {ContentFactura} from '../../../../../../interfaces/envio-factura-correo';
import {UserClientesService} from '../../../../services/user-clientes/user-clientes.service';
import {CodigoSuscripcion} from '../../../../../../interfaces/codigo-suscripcion';

@Component({
  selector: 'app-envio-factura-medio-correo-clientes',
  templateUrl: './envio-factura-medio-correo-clientes.component.html',
  styleUrls: ['./envio-factura-medio-correo-clientes.component.scss']
})
export class EnvioFacturaMedioCorreoClientesComponent implements OnInit, AfterViewInit {
  displayColumns: string[] = ['codigo', 'edicion'];
  @ViewChildren(MatSlideToggle) sliders: QueryList<MatSlideToggle>;
  dataSource = new EnvioFacturaMedioCorreoDatasource(this._user);
  recaptacha: string = null;
  userId: number;

  constructor(private dialog: MatDialog,
              private  _user: UserClientesService,
              private _envioFactura: EnvioFacturaMedioCorreoClientesService) { }

  ngOnInit() {
    this._user.getUserData()
      .subscribe(user => {
        this.userId = user.userId;
        this._user.getSuscriptionCodes(this.userId)
          .subscribe(data => {
            this.dataSource.getData(data);
            console.log(data);
          });
      });
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

  /**
   * Método para habilitar o desactivar la politica
   * @param event row a modificar
   */
  confirmTogglePolitica(row: CodigoSuscripcion) {
    this.successDialog('Confirmar acción',
      `¿Desea ${ row.sendinvoicemail === true ? 'desactivar'  : 'Activar' } el envío de correos al código de cliente ${ row.code }?`
    ).afterClosed()
      .subscribe(result => {
        console.log(result);
        if (result) {
         this._envioFactura.togglePolitica(this.userId, row.code)
            .subscribe(() => {
              this._user.getSuscriptionCodes(this.userId)
                .subscribe(codes => {
                  this.dataSource.getData(codes);
                  console.log(codes);
                });
            });
        }
      });
  }


  /**
   * Ejecuta un dialog cuando la petición se realizó correctamente
   * @param title el titulo del dialog
   * @param message el mensaje del dialog
   */
  successDialog(title: string, message: string) {
    return this.dialog.open(DialogConfirmComponent, {
      data: {
        title: title,
        content: message
      }
    });
  }
  recaptchaResolved(event) {
      if (event) {
        this.recaptacha = event;
      } else {
        this.recaptacha = null;
      }
  }


}
