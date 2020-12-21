import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetPasswordClientesRoutingModule } from './forget-password-clientes-routing.module';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';
import {ForgetPasswordClientesComponent} from './forget-password-clientes.component';

@NgModule({
  imports: [
    CommonModule,
    ForgetPasswordClientesRoutingModule,
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
  declarations: [ForgetPasswordClientesComponent]
})
export class ForgetPasswordClientesModule { }
