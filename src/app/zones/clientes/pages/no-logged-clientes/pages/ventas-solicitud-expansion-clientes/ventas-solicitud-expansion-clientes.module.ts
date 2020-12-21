import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasSolicitudExpansionClientesRoutingModule } from './ventas-solicitud-expansion-clientes-routing.module';
import { VentasSolicitudExpansionClientesComponent } from './ventas-solicitud-expansion-clientes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
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
    VentasSolicitudExpansionClientesRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    RecaptchaFormsModule,
    RecaptchaModule,
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
  declarations: [VentasSolicitudExpansionClientesComponent]
})
export class VentasSolicitudExpansionClientesModule { }
