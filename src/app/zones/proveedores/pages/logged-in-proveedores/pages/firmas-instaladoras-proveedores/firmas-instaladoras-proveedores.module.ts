import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirmasInstaladorasProveedoresRoutingModule } from './firmas-instaladoras-proveedores-routing.module';
import { FirmasInstaladorasProveedoresComponent } from './firmas-instaladoras-proveedores.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule, MatDatepickerModule,
  MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule, MatTooltipModule
} from '@angular/material';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';
import {AutorizacionTratamientoModule} from '../../../../../../shared/autorizacion-tratamiento/autorizacion-tratamiento.module';
import {UploadMultipleFilesModule} from '../../../../../../shared/upload-multiple-files/upload-multiple-files.module';

@NgModule({
  imports: [
    CommonModule,
    FirmasInstaladorasProveedoresRoutingModule,
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
  declarations: [FirmasInstaladorasProveedoresComponent]
})
export class FirmasInstaladorasProveedoresModule { }
