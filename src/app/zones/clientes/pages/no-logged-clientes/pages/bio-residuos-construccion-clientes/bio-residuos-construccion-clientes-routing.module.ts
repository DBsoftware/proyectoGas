import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BioResiduosConstruccionClientesComponent} from './bio-residuos-construccion-clientes.component';

const routes: Routes = [{path: '', component: BioResiduosConstruccionClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BioResiduosConstruccionClientesRoutingModule { }
