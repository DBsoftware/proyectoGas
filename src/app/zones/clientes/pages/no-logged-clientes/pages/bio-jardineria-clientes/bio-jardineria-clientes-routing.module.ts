import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BioJardineriaClientesComponent} from './bio-jardineria-clientes.component';

const routes: Routes = [{path: '', component: BioJardineriaClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BioJardineriaClientesRoutingModule { }
