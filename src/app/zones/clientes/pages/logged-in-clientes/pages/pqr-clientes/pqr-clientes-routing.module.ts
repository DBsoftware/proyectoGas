import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PqrClientesComponent} from './pqr-clientes.component';

const routes: Routes = [{path: '', component: PqrClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PqrClientesRoutingModule { }
