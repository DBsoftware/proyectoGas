import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConvocatoriaService} from '../../../../../administrador/services/logged-in/pages/convocatoria/convocatoria.service';
import {ConvocatoriasProveedoresService} from '../../../../services/convocatorias-proveedores/convocatorias-proveedores.service';
import {Observable} from 'rxjs';
import {ProviderRequiredFiles} from '../../../../../../interfaces/data-proveedores';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {AppConfig} from '../../../../../../config/app-config';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-convocatoria-proveedores',
  templateUrl: './convocatoria-proveedores.component.html',
  styleUrls: ['./convocatoria-proveedores.component.scss']
})
export class ConvocatoriaProveedoresComponent implements OnInit {
  listArr = [];
  activateConvocatorias$: Observable<any>;
  constructor(private http: HttpClient,
              private dialog: MatDialog,
              private _convocatoria: ConvocatoriasProveedoresService) { }

  ngOnInit() {
     this.activateConvocatorias$ = this._convocatoria.obtenerConvocatorias();
  }

  viewPDF(item) {
    console.log(item);
    this.dialog.open(PdfViewerComponent, {
      minWidth: '90vw',
      minHeight: '68vh',
      data: {
        url: `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/${ item.file.id }/stream`
      }
    });
  }

}
