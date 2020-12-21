import { NgModule } from '@angular/core';
import {ForgetPasswordFormClientesComponent} from './forget-password-form-clientes.component';
import {ForgetPasswordClientesGuard} from '../../../../services/no-logged/guards/forget-password-clientes/forget-password-clientes.guard';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';
import {ForgetPasswordFormClientesRoutingModule} from './forget-password-form-clientes-routing.module';



@NgModule({
  imports: [
    CommonModule,
    ForgetPasswordFormClientesRoutingModule,
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
  providers: [ForgetPasswordClientesGuard],
  declarations: [ForgetPasswordFormClientesComponent]
})
export class ForgetPasswordFormClientesModule { }
