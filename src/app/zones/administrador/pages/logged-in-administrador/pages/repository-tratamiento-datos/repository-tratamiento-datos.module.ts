import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryTratamientoDatosRoutingModule } from './repository-tratamiento-datos-routing.module';
import { RepositoryTratamientoDatosComponent } from './repository-tratamiento-datos.component';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule, MatPaginatorModule,
  MatSlideToggleModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {InfoDialogModule} from '../../../../../../shared/info-dialog/info-dialog.module';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';

@NgModule({
  imports: [
    CommonModule,
    RepositoryTratamientoDatosRoutingModule,
    MatTableModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTooltipModule,
    FlexLayoutModule,
    DialogConfirmModule,
    MatButtonModule,
    MatDividerModule,
    InfoDialogModule,
    MatMenuModule,
    PdfViewerModule,
    MatPaginatorModule
  ],
  declarations: [RepositoryTratamientoDatosComponent]
})
export class RepositoryTratamientoDatosModule { }
