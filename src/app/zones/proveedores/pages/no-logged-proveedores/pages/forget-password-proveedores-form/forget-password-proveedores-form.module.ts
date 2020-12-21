import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetPasswordProveedoresFormRoutingModule } from './forget-password-proveedores-form-routing.module';
import {MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule} from '@angular/material';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';
import { ForgetPasswordProveedoresFormComponent } from './forget-password-proveedores-form.component';

@NgModule({
  imports: [
    CommonModule,
    ForgetPasswordProveedoresFormRoutingModule,
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
  declarations: [ForgetPasswordProveedoresFormComponent]
})
export class ForgetPasswordProveedoresFormModule { }
