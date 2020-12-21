import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConvocatoriaProveedoresComponent} from './convocatoria-proveedores.component';

const routes: Routes = [{path: '', component: ConvocatoriaProveedoresComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvocatoriaProveedoresRoutingModule { }
