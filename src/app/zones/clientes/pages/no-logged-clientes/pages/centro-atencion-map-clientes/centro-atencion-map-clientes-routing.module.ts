import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CentroAtencionMapClientesComponent} from './centro-atencion-map-clientes.component';

const routes: Routes = [{path: '', component: CentroAtencionMapClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentroAtencionMapClientesRoutingModule { }
