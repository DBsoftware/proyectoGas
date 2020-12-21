import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetPasswordProveedoresRoutingModule } from './forget-password-proveedores-routing.module';
import { ForgetPasswordProveedoresComponent } from './forget-password-proveedores.component';
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
    ForgetPasswordProveedoresRoutingModule,
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
    MatDialogModule,
  ],
  declarations: [ForgetPasswordProveedoresComponent]
})
export class ForgetPasswordProveedoresModule { }
