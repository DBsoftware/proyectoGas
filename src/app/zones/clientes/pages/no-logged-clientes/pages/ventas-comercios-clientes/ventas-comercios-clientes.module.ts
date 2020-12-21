import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasComerciosClientesRoutingModule } from './ventas-comercios-clientes-routing.module';
import { VentasComerciosClientesComponent } from './ventas-comercios-clientes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatStepperModule,
  MatTableModule, MatTabsModule
} from '@angular/material';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';
import { VentasComerciosSimulacionClientesComponent } from './ventas-comercios-simulacion-clientes/ventas-comercios-simulacion-clientes.component';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';
import {AutorizacionTratamientoModule} from '../../../../../../shared/autorizacion-tratamiento/autorizacion-tratamiento.module';

@NgModule({
  imports: [
    CommonModule,
    VentasComerciosClientesRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    MatCheckboxModule,
    FormErrorsModule,
    MatAutocompleteModule,
    FlexLayoutModule,
    PdfViewerModule,
    MatStepperModule,
    SuccessDialogModule,
    MatTabsModule,
    MatTableModule,
    DialogConfirmModule,
    AutorizacionTratamientoModule
  ],
  declarations: [VentasComerciosClientesComponent, VentasComerciosSimulacionClientesComponent]
})
export class VentasComerciosClientesModule { }
