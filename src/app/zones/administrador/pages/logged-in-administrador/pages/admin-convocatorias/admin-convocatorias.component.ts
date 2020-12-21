import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {MatDialog, MatSlideToggle, PageEvent} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {RowTratamientoData} from '../../../../../../interfaces/forms/tratamiento-data';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {RoutingPathAdmin} from '../../../../routing-path-admin';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {AppConfig} from '../../../../../../config/app-config';
import {AdminConvocatoriasDatasource} from './admin-convocatorias-datasource';
import {RowConvocatoriasTable} from '../../../../../../interfaces/convocatorias';
import {ConvocatoriaService} from '../../../../services/logged-in/pages/convocatoria/convocatoria.service';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';
import {InfoDialogComponent} from '../../../../../../shared/info-dialog/info-dialog.component';

@Component({
  selector: 'app-admin-evaluacion-desempeno',
  templateUrl: './admin-convocatorias.component.html',
  styleUrls: ['./admin-convocatorias.component.scss']
})
export class AdminConvocatoriasComponent implements OnInit, AfterViewInit {
  @ViewChildren(MatSlideToggle) sliders: QueryList<MatSlideToggle>;

  dataSource = new  AdminConvocatoriasDatasource(this._convocatoria);

  constructor(private _convocatoria: ConvocatoriaService,
              private dialog: MatDialog,
              private router: Router,
              private activated: ActivatedRoute,
  ) { }

  displayedColumns: string[] = ['status', 'filename', 'acciones'];

  /**
   * Hace una solicitud para obtener la data
   */
  ngOnInit() {
    this.dataSource.getData();
  }
  ngAfterViewInit() {
    this.sliders.changes
      .subscribe(() => {
        this.sliders.toArray()
          .forEach(slide => {
            slide.defaults.disableDragValue = true;
            slide.defaults.disableToggleValue = true;
          });
      });
  }
  eliminarPolitica(row: RowConvocatoriasTable) {
    this.confirmDialog('Confirmar acción', `¿Deses eliminar la convocatoria ${ row.description }`)
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this._convocatoria.eliminarConvocatoria(row.id)
            .subscribe((data) => {
              this.dataSource.getData();
              this.successDialog(data.body.message);
              console.log(data);
            });
        }
      });
  }

  confirmToggleConvocatoria(row: RowConvocatoriasTable) {
    this.confirmDialog('Confirmar acción',
      `¿Desea ${ row.status === 'A' ? 'desactivar'  : 'Activar' } la convocatoria ${ row.description }?`)
      .afterClosed()
      .subscribe(result => {
        console.log(result);
        if (result) {
          this._convocatoria.toogleConvocatoria(row.id)
            .subscribe(data => {
              this.successDialog(data.body.message);
              this.dataSource.getData();
              console.log(data);
            });
        }
      });
  }
  editarConvocatoria(row: RowConvocatoriasTable) {
   this.router.navigate(
     [RoutingPathAdmin.LOGGED_IN_ROUTING.pages.convocatorias_editar_path.path, row.id],
     {relativeTo: this.activated});
  }
  /**
   * Ejecuta un dialog cuando la petición se realizó correctamente
   * @param title el titulo del dialog
   * @param message el mensaje del dialog
   */
  successDialog(title: any) {
    return this.dialog.open(SuccessDialogComponent, {
      data: {
        message: title,
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

  /**
   * Usa el router de angular para navegar a generar una política.
   */
  goToForm() {
    this.router.navigate([`${ RoutingPathAdmin.LOGGED_IN_ROUTING.pages.convocatorias_form.path }`], {relativeTo: this.activated})
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }

  /**
   *  Abre un mat dialog y envía id del Archivo
   * @param row data enviada del datatable
   */
  openDialogPDF(row: RowConvocatoriasTable) {
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
