import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaAvisosClientesRoutingModule } from './consulta-avisos-clientes-routing.module';
import { ConsultaAvisosClientesComponent } from './consulta-avisos-clientes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule, MatTooltipModule
} from '@angular/material';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';

@NgModule({
  imports: [
    CommonModule,
    ConsultaAvisosClientesRoutingModule,
    ReactiveFormsModule,
    FormErrorsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    SuccessDialogModule,
    DialogConfirmModule,
    PdfViewerModule
  ],
  declarations: [ConsultaAvisosClientesComponent]
})
export class ConsultaAvisosClientesModule { }
