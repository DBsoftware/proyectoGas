import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormDatosPersonalesRoutingModule } from './form-datos-personales-routing.module';
import {FormDatosPersonalesComponent} from './form-datos-personales.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatProgressSpinnerModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RecaptchaModule} from 'ng-recaptcha';
import {FormErrorsModule} from '../../../../../../../../shared/form-errors/form-errors.module';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {SuccessDialogModule} from '../../../../../../../../shared/success-dialog/success-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    FormDatosPersonalesRoutingModule,
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
  declarations: [FormDatosPersonalesComponent]
})
export class FormDatosPersonalesModule { }
