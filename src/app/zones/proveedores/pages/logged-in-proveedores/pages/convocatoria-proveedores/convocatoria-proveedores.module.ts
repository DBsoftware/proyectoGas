import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvocatoriaProveedoresRoutingModule } from './convocatoria-proveedores-routing.module';
import { ConvocatoriaProveedoresComponent } from './convocatoria-proveedores.component';
import {MatDialogModule, MatDividerModule, MatIconModule, MatListModule} from '@angular/material';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';

@NgModule({
  imports: [
    CommonModule,
    ConvocatoriaProveedoresRoutingModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    PdfViewerModule,
    MatDialogModule
  ],
  declarations: [ConvocatoriaProveedoresComponent]
})
export class ConvocatoriaProveedoresModule { }
