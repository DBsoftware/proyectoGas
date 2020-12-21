import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EstadoDeFinanciacionClientesComponent} from './estado-de-financiacion-clientes.component';

const routes: Routes = [{path: '', component: EstadoDeFinanciacionClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadoDeFinanciacionClientesRoutingModule { }
