import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasConstructurasGrandesClientesRoutingModule } from './ventas-constructuras-grandes-clientes-routing.module';
import { VentasConstructurasGrandesClientesComponent } from './ventas-constructuras-grandes-clientes.component';
import { InformacionProyectoClientesComponent } from './informacion-proyecto-clientes/informacion-proyecto-clientes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule, MatDatepickerModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule, MatStepperModule, MatTabsModule
} from '@angular/material';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';
import {UploadMultipleFilesModule} from '../../../../../../shared/upload-multiple-files/upload-multiple-files.module';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {AutorizacionTratamientoModule} from '../../../../../../shared/autorizacion-tratamiento/autorizacion-tratamiento.module';

@NgModule({
  imports: [
    CommonModule,
    VentasConstructurasGrandesClientesRoutingModule,
    CommonModule,
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
    MatTabsModule,
    UploadMultipleFilesModule,
    MatDatepickerModule,
    MatDividerModule,
    DialogConfirmModule,
    AutorizacionTratamientoModule
  ],
  declarations: [VentasConstructurasGrandesClientesComponent, InformacionProyectoClientesComponent]
})
export class VentasConstructurasGrandesClientesModule { }
