import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GrandesClientesComponent} from './grandes-clientes.component';

const routes: Routes = [{path: '', component: GrandesClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrandesClientesRoutingModule { }
