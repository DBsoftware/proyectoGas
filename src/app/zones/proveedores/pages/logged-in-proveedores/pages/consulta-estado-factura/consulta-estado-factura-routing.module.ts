import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultaEstadoFacturaComponent} from './consulta-estado-factura.component';

const routes: Routes = [{path: '', component: ConsultaEstadoFacturaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaEstadoFacturaRoutingModule { }
