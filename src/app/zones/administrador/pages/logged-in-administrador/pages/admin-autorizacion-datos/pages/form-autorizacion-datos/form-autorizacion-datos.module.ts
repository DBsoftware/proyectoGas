import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormAutorizacionDatosRoutingModule } from './form-autorizacion-datos-routing.module';
import { FormAutorizacionDatosComponent } from './form-autorizacion-datos.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {FormErrorsModule} from '../../../../../../../../shared/form-errors/form-errors.module';
import {SuccessDialogModule} from '../../../../../../../../shared/success-dialog/success-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    FormAutorizacionDatosRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FormErrorsModule,
    SuccessDialogModule
  ],
  declarations: [FormAutorizacionDatosComponent]
})
export class FormAutorizacionDatosModule { }
