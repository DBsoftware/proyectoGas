import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BioDisposicionResiduosParticularesClientesComponent} from './bio-disposicion-residuos-particulares-clientes.component';

const routes: Routes = [{path: '', component: BioDisposicionResiduosParticularesClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BioDisposicionResiduosParticularesClientesRoutingModule { }
