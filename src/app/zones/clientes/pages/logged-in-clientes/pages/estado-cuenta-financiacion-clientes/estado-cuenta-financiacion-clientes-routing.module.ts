import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EstadoCuentaFinanciacionClientesComponent} from './estado-cuenta-financiacion-clientes.component';

const routes: Routes = [{path: '', component: EstadoCuentaFinanciacionClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadoCuentaFinanciacionClientesRoutingModule { }
