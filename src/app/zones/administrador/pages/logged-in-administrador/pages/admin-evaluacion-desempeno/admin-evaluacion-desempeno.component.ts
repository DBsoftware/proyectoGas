import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {EvaluacionDesempenoService} from '../../../../services/logged-in/pages/evaluacion-desempeno/evaluacion-desempeno.service';
import {MatDialog, MatSlideToggle, PageEvent} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {RowTratamientoData} from '../../../../../../interfaces/forms/tratamiento-data';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {RoutingPathAdmin} from '../../../../routing-path-admin';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {AppConfig} from '../../../../../../config/app-config';
import {EvaluacionDesempenoDatasource} from './evaluacion-desempeno-datasource';
import {RowEvaluacion} from '../../../../../../interfaces/evaluacion';
import {RoutingPath} from '../../../../../../routing-path';
import {ModalZipComponent} from './pages/modal-zip/modal-zip.component';

@Component({
  selector: 'app-admin-evaluacion-desempeno',
  templateUrl: './admin-evaluacion-desempeno.component.html',
  styleUrls: ['./admin-evaluacion-desempeno.component.scss']
})
export class AdminEvaluacionDesempenoComponent implements OnInit, AfterViewInit {
  @ViewChildren(MatSlideToggle) sliders: QueryList<MatSlideToggle>;

  dataSource = new EvaluacionDesempenoDatasource(this._evaluacionService);

  constructor(private _evaluacionService: EvaluacionDesempenoService,
              private dialog: MatDialog,
              private router: Router,
              private activated: ActivatedRoute,
  ) { }

  displayedColumns: string[] = ['toogle', 'filename', 'companyName', 'year', 'acciones'];

  /**
   * Hace una solicitud para obtener la data
   */
  ngOnInit() {
    this.dataSource.getData('10', '0');
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

  openModal() {
      this.dialog.open(ModalZipComponent,
        {
          minWidth: '60vw',
          minHeight: '38vh',
        });
  }


  confirmToggleEvaluacion(row: RowEvaluacion) {
    this.confirmDialog('Confirmar acción',
      `¿Desea ${ row.status === 'A' ? 'desactivar'  : 'Activar' } la evalación ${ row.description }?`)
      .afterClosed()
      .subscribe(result => {
        console.log(result);
        if (result) {
          this._evaluacionService.toogleEvaluacion(row.id)
            .subscribe(data => {
              this.successDialog(data.body.message);
              this.dataSource.getData();
              console.log(data);
            });
        }
      });
  }
  editarEvaluacionDesempeno(row: RowEvaluacion) {
    this.router.navigate(
      [`/${ RoutingPath.APP_ROUTING.pages.administrador.path }/${ RoutingPathAdmin.ADMINISTRAR_ROUTING.pages.logged_in.path }/${RoutingPathAdmin.LOGGED_IN_ROUTING.pages.evaluacion_desempeno.path}/${RoutingPathAdmin.LOGGED_IN_ROUTING.pages.evaluacion_desempeno_edit.path}`, row.id],
    ).then(response => console.log())
      .catch(err => console.error(err));
  }


  eliminarEvaluacion(row: RowEvaluacion) {
    this.confirmDialog('Confirmar acción', `¿Desea eliminar la evaluación ${ row.description }?`)
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this._evaluacionService.eliminarEvaluacion(row.id)
            .subscribe((data) => {
              this.successDialog(data.body.message);
              this.dataSource.getData(null, null);
              // this.infoDi              console.log(data);alog(data.body.message);
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
  successDialog(title: string) {
    return this.dialog.open(DialogConfirmComponent, {
      data: {
        title: title,
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
   // Usa el router de angular para navegar a generar una política.

  goToForm() {
    this.router.navigate([`${ RoutingPathAdmin.LOGGED_IN_ROUTING.pages.evaluacion_desempeno_form.path }`], { relativeTo: this.activated})
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
