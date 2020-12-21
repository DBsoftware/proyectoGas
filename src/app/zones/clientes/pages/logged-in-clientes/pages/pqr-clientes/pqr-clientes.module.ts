import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PqrClientesRoutingModule } from './pqr-clientes-routing.module';
import { PqrClientesComponent } from './pqr-clientes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule, MatTooltipModule
} from '@angular/material';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';
import {AutorizacionTratamientoModule} from '../../../../../../shared/autorizacion-tratamiento/autorizacion-tratamiento.module';
import {UploadMultipleFilesModule} from '../../../../../../shared/upload-multiple-files/upload-multiple-files.module';

@NgModule({
  imports: [
    CommonModule,
    PqrClientesRoutingModule,
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
    AutorizacionTratamientoModule,
    UploadMultipleFilesModule
  ],
  declarations: [PqrClientesComponent]
})
export class PqrClientesModule { }
