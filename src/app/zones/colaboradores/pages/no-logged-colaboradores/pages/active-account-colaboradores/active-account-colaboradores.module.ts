import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveAccountColaboradoresRoutingModule } from './active-account-colaboradores-routing.module';
import {ActiveAccountRoutingModule} from '../../../../../clientes/pages/no-logged-clientes/pages/active-account-clientes/active-account-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressBarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';
import {ActiveAccountColaboradoresComponent} from './active-account-colaboradores.component';

@NgModule({
  imports: [
    CommonModule,
    ActiveAccountColaboradoresRoutingModule,
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
  declarations: [ActiveAccountColaboradoresComponent]
})
export class ActiveAccountColaboradoresModule { }
