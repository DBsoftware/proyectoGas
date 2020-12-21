import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GnvUbicacionEstacionesClientesComponent} from './gnv-ubicacion-estaciones-clientes.component';

const routes: Routes = [{path: '', component: GnvUbicacionEstacionesClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GnvUbicacionEstacionesClientesRoutingModule { }
