import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForgetPasswordProveedoresComponent} from './forget-password-proveedores.component';

const routes: Routes = [{path: '', component: ForgetPasswordProveedoresComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgetPasswordProveedoresRoutingModule { }
