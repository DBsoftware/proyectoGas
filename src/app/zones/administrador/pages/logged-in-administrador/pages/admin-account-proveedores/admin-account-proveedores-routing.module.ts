import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminAccountProveedoresComponent} from './admin-account-proveedores.component';

const routes: Routes = [{path: '', component: AdminAccountProveedoresComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAccountProveedoresRoutingModule { }
