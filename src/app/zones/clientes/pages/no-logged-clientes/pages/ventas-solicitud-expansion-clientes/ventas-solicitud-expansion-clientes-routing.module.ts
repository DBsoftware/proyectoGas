import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VentasSolicitudExpansionClientesComponent} from './ventas-solicitud-expansion-clientes.component';

const routes: Routes = [{path: '', component: VentasSolicitudExpansionClientesComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasSolicitudExpansionClientesRoutingModule { }
