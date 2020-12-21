import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReporteDeFugasClientesComponent} from './reporte-de-fugas-clientes.component';

const routes: Routes = [{path: '', component: ReporteDeFugasClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteDeFugasClientesRoutingModule { }
