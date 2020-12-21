import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEvaluacionDesempenoRoutingModule } from './admin-evaluacion-desempeno-routing.module';
import { AdminEvaluacionDesempenoComponent } from './admin-evaluacion-desempeno.component';
import {
  DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatAutocompleteModule,
  MatButtonModule, MatDatepickerModule, MatDialogModule,
  MatDividerModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatMenuModule,
  MatPaginatorModule, MatSliderModule, MatSlideToggleModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {InfoDialogModule} from '../../../../../../shared/info-dialog/info-dialog.module';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {UploadMultipleFilesModule} from '../../../../../../shared/upload-multiple-files/upload-multiple-files.module';
import {FormEvaluacionDesempenoComponent} from './pages/form-evaluacion-desempeno/form-evaluacion-desempeno.component';
import { EditarEvaluacionDesempenoComponent } from './pages/editar-evaluacion-desempeno/editar-evaluacion-desempeno.component';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import { ModalZipComponent } from './pages/modal-zip/modal-zip.component';
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@NgModule({
  imports: [
    CommonModule,
    AdminEvaluacionDesempenoRoutingModule,
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
    MatDatepickerModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatDialogModule,
  ],
  declarations: [AdminEvaluacionDesempenoComponent, FormEvaluacionDesempenoComponent, EditarEvaluacionDesempenoComponent, ModalZipComponent],
  entryComponents: [ModalZipComponent],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE], useValue: 'es-CO'},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class AdminEvaluacionDesempenoModule { }
