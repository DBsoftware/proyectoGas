import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentroAtencionMapClientesRoutingModule } from './centro-atencion-map-clientes-routing.module';
import { CentroAtencionMapClientesComponent } from './centro-atencion-map-clientes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AgmCoreModule, } from '@agm/core';
import {MatDividerModule, MatIconModule, MatListModule} from '@angular/material';
import {AutorizacionTratamientoModule} from '../../../../../../shared/autorizacion-tratamiento/autorizacion-tratamiento.module';

@NgModule({
  imports: [
    CommonModule,
    CentroAtencionMapClientesRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AgmCoreModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    AutorizacionTratamientoModule
  ],
  declarations: [CentroAtencionMapClientesComponent],
})
export class CentroAtencionMapClientesModule { }
