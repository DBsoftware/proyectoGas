import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadoDeFinanciacionClientesRoutingModule } from './estado-de-financiacion-clientes-routing.module';
import { EstadoDeFinanciacionClientesComponent } from './estado-de-financiacion-clientes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatDatepickerModule,
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

@NgModule({
  imports: [
    CommonModule,
    EstadoDeFinanciacionClientesRoutingModule,
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
    MatDatepickerModule
  ],
  declarations: [EstadoDeFinanciacionClientesComponent]
})
export class EstadoDeFinanciacionClientesModule { }
