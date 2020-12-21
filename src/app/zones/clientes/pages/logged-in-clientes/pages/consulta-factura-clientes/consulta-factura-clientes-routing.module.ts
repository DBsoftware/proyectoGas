import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultaFacturaClientesComponent} from './consulta-factura-clientes.component';

const routes: Routes = [{path: '', component: ConsultaFacturaClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaFacturaClientesRoutingModule { }
