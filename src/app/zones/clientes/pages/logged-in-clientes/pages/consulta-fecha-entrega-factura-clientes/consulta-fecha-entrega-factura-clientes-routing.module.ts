import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultaFechaEntregaFacturaClientesComponent} from './consulta-fecha-entrega-factura-clientes.component';

const routes: Routes = [{path: '', component: ConsultaFechaEntregaFacturaClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaFechaEntregaFacturaClientesRoutingModule { }
