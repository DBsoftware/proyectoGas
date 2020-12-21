import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResuelveTuDeudaClientesRoutingModule } from './resuelve-tu-deuda-clientes-routing.module';
import { ResuelveTuDeudaClientesComponent } from './resuelve-tu-deuda-clientes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTooltipModule
} from '@angular/material';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';
import {AutorizacionTratamientoModule} from '../../../../../../shared/autorizacion-tratamiento/autorizacion-tratamiento.module';

@NgModule({
  imports: [
    CommonModule,
    ResuelveTuDeudaClientesRoutingModule,
    ReactiveFormsModule,
    FormErrorsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatButtonModule,
    SuccessDialogModule,
    DialogConfirmModule,
    MatCheckboxModule,
    MatDialogModule,
    PdfViewerModule,
    AutorizacionTratamientoModule
  ],
  declarations: [ResuelveTuDeudaClientesComponent]
})
export class ResuelveTuDeudaClientesModule { }
