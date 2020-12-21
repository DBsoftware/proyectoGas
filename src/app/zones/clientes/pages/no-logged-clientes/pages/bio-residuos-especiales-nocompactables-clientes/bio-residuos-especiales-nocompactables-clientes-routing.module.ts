import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BioResiduosEspecialesNocompactablesClientesComponent} from './bio-residuos-especiales-nocompactables-clientes.component';

const routes: Routes = [{path: '', component: BioResiduosEspecialesNocompactablesClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BioResiduosEspecialesNocompactablesClientesRoutingModule { }
