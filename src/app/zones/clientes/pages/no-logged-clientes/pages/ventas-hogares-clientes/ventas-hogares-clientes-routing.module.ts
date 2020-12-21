import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VentasHogaresClientesComponent} from './ventas-hogares-clientes.component';

const routes: Routes = [{path: '', component: VentasHogaresClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasHogaresClientesRoutingModule { }
