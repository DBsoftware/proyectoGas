import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VentasConstructurasGrandesClientesComponent} from './ventas-constructuras-grandes-clientes.component';

const routes: Routes = [{path: '', component: VentasConstructurasGrandesClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasConstructurasGrandesClientesRoutingModule { }
