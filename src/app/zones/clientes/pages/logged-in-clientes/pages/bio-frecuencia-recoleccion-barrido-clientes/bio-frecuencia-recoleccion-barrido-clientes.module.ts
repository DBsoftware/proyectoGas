import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BioFrecuenciaRecoleccionBarridoClientesRoutingModule } from './bio-frecuencia-recoleccion-barrido-clientes-routing.module';
import { BioFrecuenciaRecoleccionBarridoClientesComponent } from './bio-frecuencia-recoleccion-barrido-clientes.component';
import { BioFrecuenciaRecoleccionBarridoClientesDatatableComponent } from './bio-frecuencia-recoleccion-barrido-clientes-datatable/bio-frecuencia-recoleccion-barrido-clientes-datatable.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule,
  MatSelectModule,
  MatTableModule, MatTooltipModule
} from '@angular/material';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {AgmCoreModule} from '@agm/core';
import {BioFrecuenciaRecoleccionBarridoClientesMapViewerComponent} from './bio-frecuencia-recoleccion-barrido-clientes-map-viewer/bio-frecuencia-recoleccion-barrido-clientes-map-viewer.component';
import {AutorizacionTratamientoModule} from '../../../../../../shared/autorizacion-tratamiento/autorizacion-tratamiento.module';

@NgModule({
  imports: [
    CommonModule,
    BioFrecuenciaRecoleccionBarridoClientesRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    MatCheckboxModule,
    FormErrorsModule,
    FlexLayoutModule,
    PdfViewerModule,
    DialogConfirmModule,
    MatDividerModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    AgmCoreModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    AutorizacionTratamientoModule
  ],
  declarations: [BioFrecuenciaRecoleccionBarridoClientesComponent, BioFrecuenciaRecoleccionBarridoClientesDatatableComponent, BioFrecuenciaRecoleccionBarridoClientesMapViewerComponent]
})
export class BioFrecuenciaRecoleccionBarridoClientesModule { }
