import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecaudadoresClientesComponent} from './recaudadores-clientes.component';

const routes: Routes = [{path: '', component: RecaudadoresClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecaudadoresClientesRoutingModule { }
