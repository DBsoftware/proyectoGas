import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResuelveTuDeudaClientesComponent} from './resuelve-tu-deuda-clientes.component';

const routes: Routes = [{path: '', component: ResuelveTuDeudaClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResuelveTuDeudaClientesRoutingModule { }
