import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {AdminAutorizacionDatosRoutingModule} from '../admin-autorizacion-datos/admin-autorizacion-datos-routing.module';
import {
  MatButtonModule,
  MatDividerModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatMenuModule, MatPaginatorModule,
  MatSlideToggleModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {InfoDialogModule} from '../../../../../../shared/info-dialog/info-dialog.module';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';
import {AdminConvocatoriasComponent} from './admin-convocatorias.component';
import {AdminConvocatoriasRoutingModule} from './admin-convocatorias-routing.module';
import {FormConvocatoriasComponent} from './pages/form-convocatorias/form-convocatorias.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {UploadMultipleFilesModule} from '../../../../../../shared/upload-multiple-files/upload-multiple-files.module';
import { EditarConvocatoriaComponent } from './pages/editar-convocatoria/editar-convocatoria.component';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    AdminConvocatoriasRoutingModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    FlexLayoutModule,
    DialogConfirmModule,
    MatButtonModule,
    MatDividerModule,
    InfoDialogModule,
    MatMenuModule,
    PdfViewerModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormErrorsModule,
    UploadMultipleFilesModule,
    MatSlideToggleModule
  ],
  declarations: [AdminConvocatoriasComponent, FormConvocatoriasComponent, EditarConvocatoriaComponent]
})
export class AdminConvocatoriasModule { }
