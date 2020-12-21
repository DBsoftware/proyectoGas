import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaFacturaClientesRoutingModule } from './consulta-factura-clientes-routing.module';
import { ConsultaFacturaClientesComponent } from './consulta-factura-clientes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTooltipModule} from '@angular/material';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';
import {InfoDialogModule} from '../../../../../../shared/info-dialog/info-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    ConsultaFacturaClientesRoutingModule,
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
    PdfViewerModule,
    InfoDialogModule
  ],
  declarations: [ConsultaFacturaClientesComponent]
})
export class ConsultaFacturaClientesModule { }
