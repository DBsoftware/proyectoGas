import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultasFechasVencimientoClientesComponent} from './consultas-fechas-vencimiento-clientes.component';

const routes: Routes = [{path: '', component: ConsultasFechasVencimientoClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasFechasVencimientoClientesRoutingModule { }
