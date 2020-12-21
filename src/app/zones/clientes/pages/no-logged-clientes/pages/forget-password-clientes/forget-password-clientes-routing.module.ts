import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForgetPasswordClientesComponent} from './forget-password-clientes.component';

const routes: Routes = [{path: '', component: ForgetPasswordClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgetPasswordClientesRoutingModule { }
