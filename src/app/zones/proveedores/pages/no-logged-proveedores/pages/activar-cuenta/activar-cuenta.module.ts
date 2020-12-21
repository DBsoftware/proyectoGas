import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivarCuentaRoutingModule } from './activar-cuenta-routing.module';
import { ActivarCuentaComponent } from './activar-cuenta.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressBarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    ActivarCuentaRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatProgressBarModule,
    MatIconModule,
    FormErrorsModule,
    MatDialogModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    SuccessDialogModule
  ],
  declarations: [ActivarCuentaComponent]
})
export class ActivarCuentaModule { }
