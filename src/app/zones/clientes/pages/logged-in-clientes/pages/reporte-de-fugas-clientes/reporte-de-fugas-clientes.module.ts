import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteDeFugasClientesRoutingModule } from './reporte-de-fugas-clientes-routing.module';
import { ReporteDeFugasClientesComponent } from './reporte-de-fugas-clientes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule, MatTooltipModule
} from '@angular/material';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';
import {AutorizacionTratamientoModule} from '../../../../../../shared/autorizacion-tratamiento/autorizacion-tratamiento.module';

@NgModule({
  imports: [
    CommonModule,
    ReporteDeFugasClientesRoutingModule,
    ReactiveFormsModule,
    FormErrorsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTooltipModule,
    SuccessDialogModule,
    DialogConfirmModule,
    PdfViewerModule,
    AutorizacionTratamientoModule
  ],
  declarations: [ReporteDeFugasClientesComponent]
})
export class ReporteDeFugasClientesModule { }
