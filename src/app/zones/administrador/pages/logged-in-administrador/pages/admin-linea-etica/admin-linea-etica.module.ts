import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLineaEticaRoutingModule } from './admin-linea-etica-routing.module';
import { AdminLineaEticaComponent } from './admin-linea-etica.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatTableModule, MatIconModule, MatPaginatorModule, MatDialogModule, MatRadioModule, MatListModule
} from '@angular/material';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';
import {AutorizacionTratamientoModule} from '../../../../../../shared/autorizacion-tratamiento/autorizacion-tratamiento.module';
import { PreviewEvaluacionComponent } from './preview-evaluacion/preview-evaluacion.component';

@NgModule({
  imports: [
    CommonModule,
    AdminLineaEticaRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    MatCheckboxModule,
    FormErrorsModule,
    FlexLayoutModule,
    PdfViewerModule,
    DialogConfirmModule,
    MatDividerModule,
    SuccessDialogModule,
    AutorizacionTratamientoModule,
    MatDatepickerModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    MatRadioModule,
    MatListModule
  ],
  declarations: [AdminLineaEticaComponent, PreviewEvaluacionComponent],
  entryComponents: [PreviewEvaluacionComponent]
})
export class AdminLineaEticaModule { }
