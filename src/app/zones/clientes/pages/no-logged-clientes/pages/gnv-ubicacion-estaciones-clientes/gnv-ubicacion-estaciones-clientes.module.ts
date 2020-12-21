import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GnvUbicacionEstacionesClientesRoutingModule } from './gnv-ubicacion-estaciones-clientes-routing.module';
import { GnvUbicacionEstacionesClientesComponent } from './gnv-ubicacion-estaciones-clientes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AgmCoreModule} from '@agm/core';
import {
  MatAutocompleteModule, MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatTableModule, MatTooltipModule
} from '@angular/material';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import { GnvUbicacionEstacionesClientesDatatableComponent } from './gnv-ubicacion-estaciones-clientes-datatable/gnv-ubicacion-estaciones-clientes-datatable.component';
import { GnvUbicacionEstacionesClientesMapViewerComponent } from './gnv-ubicacion-estaciones-clientes-map-viewer/gnv-ubicacion-estaciones-clientes-map-viewer.component';
import {AutorizacionTratamientoModule} from '../../../../../../shared/autorizacion-tratamiento/autorizacion-tratamiento.module';

@NgModule({
  imports: [
    CommonModule,
    GnvUbicacionEstacionesClientesRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AgmCoreModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormErrorsModule,
    MatButtonModule,
    MatTooltipModule,
    AutorizacionTratamientoModule
  ],
  declarations: [GnvUbicacionEstacionesClientesComponent, GnvUbicacionEstacionesClientesDatatableComponent, GnvUbicacionEstacionesClientesMapViewerComponent]
})
export class GnvUbicacionEstacionesClientesModule { }
