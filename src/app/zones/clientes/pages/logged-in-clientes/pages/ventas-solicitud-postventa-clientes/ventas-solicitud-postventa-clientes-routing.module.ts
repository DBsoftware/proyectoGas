import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VentasSolicitudPostventaClientesComponent} from './ventas-solicitud-postventa-clientes.component';

const routes: Routes = [{path: '', component: VentasSolicitudPostventaClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasSolicitudPostventaClientesRoutingModule { }
