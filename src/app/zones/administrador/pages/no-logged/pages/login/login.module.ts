import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {InfoDialogModule} from '../../../../../../shared/info-dialog/info-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FormErrorsModule,
    MatDialogModule,
    InfoDialogModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
