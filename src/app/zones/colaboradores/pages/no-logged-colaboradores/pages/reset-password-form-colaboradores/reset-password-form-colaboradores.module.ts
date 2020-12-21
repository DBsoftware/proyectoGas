import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordFormColaboradoresRoutingModule } from './reset-password-form-colaboradores-routing.module';
import { ResetPasswordFormColaboradoresComponent } from './reset-password-form-colaboradores.component';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    ResetPasswordFormColaboradoresRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormErrorsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    MatIconModule,
    SuccessDialogModule,
    MatDialogModule
  ],
  declarations: [ResetPasswordFormColaboradoresComponent]
})
export class ResetPasswordFormColaboradoresModule { }
