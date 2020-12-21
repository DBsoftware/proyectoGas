import {Component, Input, OnInit} from '@angular/core';
import {RegisterProveedoresService} from '../../../../../../../proveedores/services/register-proveedores/register-proveedores.service';
import {FileInstructivoProveedores} from '../../../../../../../../interfaces/instructivo-register-proveedores';
import {PdfViewerComponent} from '../../../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {AppConfig} from '../../../../../../../../config/app-config';
import {MatDialog} from '@angular/material';
import {ProviderRequiredFiles} from '../../../../../../../../interfaces/data-proveedores';

@Component({
  selector: 'app-documentacion-adjunta',
  templateUrl: './documentacion-adjunta.component.html',
  styleUrls: ['./documentacion-adjunta.component.scss']
})
export class DocumentacionAdjuntaComponent implements OnInit {
  @Input() fileList: ProviderRequiredFiles[];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  viewPDF(item: ProviderRequiredFiles) {
    console.log(item);
    this.dialog.open(PdfViewerComponent, {
      minWidth: '90vw',
      minHeight: '68vh',
      data: {
        url: `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/${ item.idFile }/stream`
      }
    });
  }

}
