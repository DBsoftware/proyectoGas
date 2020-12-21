import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginColaboradoresComponent} from './login-colaboradores.component';

const routes: Routes = [{path: '', component: LoginColaboradoresComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginColaboradoresRoutingModule { }
