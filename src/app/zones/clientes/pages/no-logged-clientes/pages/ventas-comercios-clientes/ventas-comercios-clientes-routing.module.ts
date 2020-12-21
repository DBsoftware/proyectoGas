import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VentasComerciosClientesComponent} from './ventas-comercios-clientes.component';

const routes: Routes = [{path: '', component: VentasComerciosClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasComerciosClientesRoutingModule { }
