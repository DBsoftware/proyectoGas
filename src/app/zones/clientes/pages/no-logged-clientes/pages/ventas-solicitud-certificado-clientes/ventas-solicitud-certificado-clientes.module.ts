import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasSolicitudCertificadoClientesRoutingModule } from './ventas-solicitud-certificado-clientes-routing.module';
import { VentasSolicitudCertificadoClientesComponent } from './ventas-solicitud-certificado-clientes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MAT_DATE_LOCALE,
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule, MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {UploadMultipleFilesModule} from '../../../../../../shared/upload-multiple-files/upload-multiple-files.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {AutorizacionTratamientoModule} from '../../../../../../shared/autorizacion-tratamiento/autorizacion-tratamiento.module';

@NgModule({
  imports: [
    CommonModule,
    VentasSolicitudCertificadoClientesRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatCheckboxModule,
    FormErrorsModule,
    UploadMultipleFilesModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    FlexLayoutModule,
    PdfViewerModule,
    DialogConfirmModule,
    AutorizacionTratamientoModule
  ],
  declarations: [VentasSolicitudCertificadoClientesComponent],

})
export class VentasSolicitudCertificadoClientesModule { }
