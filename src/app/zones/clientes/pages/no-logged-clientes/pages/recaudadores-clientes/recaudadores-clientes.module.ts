import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecaudadoresClientesRoutingModule } from './recaudadores-clientes-routing.module';
import { RecaudadoresClientesComponent } from './recaudadores-clientes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AgmCoreModule} from '@agm/core';
import {
  MatAutocompleteModule, MatButtonModule, MatFormFieldModule,
  MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule,
  MatTableModule, MatTooltipModule
} from '@angular/material';
import { RecaudadoresClientesDatatableComponent } from './recaudadores-clientes-datatable/recaudadores-clientes-datatable.component';
import { RecaudadoresClientesMapViewerComponent } from './recaudadores-clientes-map-viewer/recaudadores-clientes-map-viewer.component';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';

@NgModule({
  imports: [
    CommonModule,
    RecaudadoresClientesRoutingModule,
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
    AgmCoreModule,
    MatSelectModule

  ],
  declarations: [RecaudadoresClientesComponent, RecaudadoresClientesDatatableComponent, RecaudadoresClientesMapViewerComponent]
})
export class RecaudadoresClientesModule { }
