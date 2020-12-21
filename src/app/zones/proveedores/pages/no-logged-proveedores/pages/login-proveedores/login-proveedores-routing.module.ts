import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginProveedoresComponent} from './login-proveedores.component';

const routes: Routes = [{path: '', component: LoginProveedoresComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginProveedoresRoutingModule { }
