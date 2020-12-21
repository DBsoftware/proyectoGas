import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistroProveedoresComponent} from './registro-proveedores.component';

const routes: Routes = [{path: '', component: RegistroProveedoresComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroProveedoresRoutingModule { }
