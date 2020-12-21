import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificadosRetencionRoutingModule } from './certificados-retencion-routing.module';
import { CerficadosRetencionComponent } from './cerficados-retencion.component';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule, MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatSelectModule, MatTableModule, MatTooltipModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';
import {AutorizacionTratamientoModule} from '../../../../../../shared/autorizacion-tratamiento/autorizacion-tratamiento.module';
import {UploadMultipleFilesModule} from '../../../../../../shared/upload-multiple-files/upload-multiple-files.module';

@NgModule({
  imports: [
    CommonModule,
    CertificadosRetencionRoutingModule,
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
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    SuccessDialogModule,
    AutorizacionTratamientoModule,
    UploadMultipleFilesModule,
    MatAutocompleteModule,
    MatDatepickerModule
  ],
  declarations: [CerficadosRetencionComponent]
})
export class CertificadosRetencionModule { }
