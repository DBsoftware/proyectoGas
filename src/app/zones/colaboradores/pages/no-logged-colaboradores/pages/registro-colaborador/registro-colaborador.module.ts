import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroColaboradorRoutingModule } from './registro-colaborador-routing.module';
import { RegistroColaboradorComponent } from './registro-colaborador.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {AutorizacionTratamientoModule} from '../../../../../../shared/autorizacion-tratamiento/autorizacion-tratamiento.module';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RegistroColaboradorRoutingModule,
    ReactiveFormsModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    MatFormFieldModule,
    AutorizacionTratamientoModule,
    MatButtonModule,
    DialogConfirmModule,
    SuccessDialogModule,
    FormErrorsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatInputModule,
  ],
  declarations: [RegistroColaboradorComponent]
})
export class RegistroColaboradorModule { }
