import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirmasInstaladorasProveedoresComponent} from './firmas-instaladoras-proveedores.component';

const routes: Routes = [{path: '', component: FirmasInstaladorasProveedoresComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirmasInstaladorasProveedoresRoutingModule { }
