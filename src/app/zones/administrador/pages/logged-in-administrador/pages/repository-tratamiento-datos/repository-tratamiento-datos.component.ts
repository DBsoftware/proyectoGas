import {
  AfterViewInit,
  Component,
  Inject,
  LOCALE_ID,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import {DataSourceRepositoryTratamiento} from './data-source-repository-tratamiento';
import {MatDialog, MatSlideToggle, PageEvent} from '@angular/material';
import {RowTratamientoData} from '../../../../../../interfaces/forms/tratamiento-data';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {Router} from '@angular/router';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {RepositoryTratamientoService} from '../../../../services/logged-in/pages/repository-tratamiento/repository-tratamiento.service';
import {RoutingPathAdmin} from '../../../../routing-path-admin';
import {RoutingPath} from '../../../../../../routing-path';
import {formatDate} from '@angular/common';
import {InfoDialogComponent} from '../../../../../../shared/info-dialog/info-dialog.component';
import {AppConfig} from '../../../../../../config/app-config';
import {ConfigAdmin} from '../../../../config/config-admin';

@Component({
  selector: 'app-repository-tratamiento-datos',
  templateUrl: './repository-tratamiento-datos.component.html',
  styleUrls: ['./repository-tratamiento-datos.component.scss']
})
export class RepositoryTratamientoDatosComponent implements OnInit, AfterViewInit {

  @ViewChildren(MatSlideToggle) sliders: QueryList<MatSlideToggle>;

  dataSource = new DataSourceRepositoryTratamiento(this._repositoryTratamientoService);

  constructor(private _repositoryTratamientoService: RepositoryTratamientoService,
              private dialog: MatDialog,
              private router: Router,
              @Inject(LOCALE_ID) private locale: string
              ) { }

  displayedColumns: string[] = ['status', 'file', 'version', 'fecha_edicion', 'responsable', 'acciones'];

  /**
   * Hace una solicitud para obtener la data
   */
  ngOnInit() {
    this.dataSource.getData();
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
   * formatea una fecha dada, según la zona horaria
   * @param date la fecha a formatear
   */
  format(date: string) {
    return formatDate(date, 'yyyy-MM-dd', this.locale);
  }

  /**
   * Método para habilitar o desactivar la politica
   * @param event row a modificar
   */
  confirmTogglePolitica(row: RowTratamientoData) {
      this.successDialog('Confirmar acción',
        `¿Desea ${ row.status === 'A' ? 'desactivar'  : 'Activar' } la política ${ row.file.fileName }?`)
        .afterClosed()
        .subscribe(result => {
        console.log(result);
        if (result) {
          this._repositoryTratamientoService.tooglePolitica(row.id, row.status)
            .subscribe(data => {
              this.infoDialog(data.message, data.errors);
              this.dataSource.getData();
              console.log(data);
            });
        }
      });
  }
  eliminarPolitica(row: RowTratamientoData) {
    this.successDialog('Confirmar acción', `¿Desea eliminar la política ${ row.file.fileName }?`)
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this._repositoryTratamientoService.eliminarPolitica(row.id)
            .subscribe((data) => {
              this.dataSource.getData();
              this.infoDialog(data.message, data.errors);
              console.log(data);
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

  infoDialog(title: string, content: any) {
    this.dialog.open(InfoDialogComponent, {
      data: {
        title: title,
        content: content
      }
    });
  }

  /**
   * Usa el router de angular para navegar a generar una política.
   */
  goToForm() {
    const url = '/' + RoutingPath.APP_ROUTING.pages.administrador.path + '/' +  RoutingPathAdmin.LOGGED_IN_ROUTING.pages.tratamiento.path + '/' + RoutingPathAdmin.LOGGED_IN_ROUTING.pages.tratamiento.pages.form_datos_personales.path;
      this.router.navigate([url])
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
  }

  /**
   *  Abre un mat dialog y envía id del Archivo
   * @param row data enviada del datatable
   */
  openDialogPDF(row: RowTratamientoData) {
    this.dialog.open(PdfViewerComponent, {
      minWidth: '90vw',
      minHeight: '68vh',
      data: {
        url: `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/${ row.file.id }/stream`
      },
    });
  }

  /**
   * Hace una solicitud para paginar
   * @param event payload enviado desde el datable
   */
  paginate(event: PageEvent) {
    this.dataSource.paginate(event.pageIndex, event.pageSize);
  }
}
