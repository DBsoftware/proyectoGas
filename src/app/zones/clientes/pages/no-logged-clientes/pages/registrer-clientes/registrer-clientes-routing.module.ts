import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrerClientesComponent} from './registrer-clientes.component';

const routes: Routes = [{path: '', component: RegistrerClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrerClientesRoutingModule { }
