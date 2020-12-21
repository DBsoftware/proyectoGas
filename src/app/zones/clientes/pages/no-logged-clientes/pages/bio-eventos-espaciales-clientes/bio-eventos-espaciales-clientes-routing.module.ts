import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BioEventosEspacialesClientesComponent} from './bio-eventos-espaciales-clientes.component';

const routes: Routes = [{path: '', component: BioEventosEspacialesClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BioEventosEspacialesClientesRoutingModule { }
