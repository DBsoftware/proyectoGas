import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultaAvisosClientesComponent} from './consulta-avisos-clientes.component';

const routes: Routes = [{path: '', component: ConsultaAvisosClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaAvisosClientesRoutingModule { }
