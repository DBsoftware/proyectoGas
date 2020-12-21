import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LineaEticaClientesComponent} from './linea-etica-clientes.component';

const routes: Routes = [{path: '', component: LineaEticaClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineaEticaClientesRoutingModule { }
