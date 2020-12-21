import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginColaboradoresRoutingModule } from './login-colaboradores-routing.module';
import { LoginColaboradoresComponent } from './login-colaboradores.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {InfoDialogModule} from '../../../../../../shared/info-dialog/info-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    LoginColaboradoresRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    FormErrorsModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    MatIconModule,
    InfoDialogModule,
    MatDialogModule
  ],
  declarations: [LoginColaboradoresComponent]
})
export class LoginColaboradoresModule { }
