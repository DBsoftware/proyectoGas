import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminLineaEticaComponent} from './admin-linea-etica.component';

const routes: Routes = [{path: '', component: AdminLineaEticaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLineaEticaRoutingModule { }
