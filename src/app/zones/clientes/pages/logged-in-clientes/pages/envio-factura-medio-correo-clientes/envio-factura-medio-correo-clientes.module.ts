import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnvioFacturaMedioCorreoClientesRoutingModule } from './envio-factura-medio-correo-clientes-routing.module';
import { EnvioFacturaMedioCorreoClientesComponent } from './envio-factura-medio-correo-clientes.component';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCheckboxModule,
  MatDialogModule, MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule, MatSlideToggleModule,
  MatTableModule,
  MatTabsModule, MatTooltipModule,
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';

@NgModule({
  imports: [
    CommonModule,
    EnvioFacturaMedioCorreoClientesRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatCheckboxModule,
    FormErrorsModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatTabsModule,
    DialogConfirmModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatDividerModule
  ],
  declarations: [EnvioFacturaMedioCorreoClientesComponent]
})
export class EnvioFacturaMedioCorreoClientesModule { }
