import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GnvSugerenciasClientesComponent} from './gnv-sugerencias-clientes.component';

const routes: Routes = [{path: '', component: GnvSugerenciasClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GnvSugerenciasClientesRoutingModule { }
