import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordColaboradoresRoutingModule } from './reset-password-colaboradores-routing.module';
import { ResetPasswordColaboradoresComponent } from './reset-password-colaboradores.component';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    ResetPasswordColaboradoresRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormErrorsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    SuccessDialogModule,
    MatDialogModule
  ],
  declarations: [ResetPasswordColaboradoresComponent]
})
export class ResetPasswordColaboradoresModule { }
