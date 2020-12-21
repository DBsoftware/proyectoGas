import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BioAsesoramientoPagoComponent} from './bio-asesoramiento-pago.component';

const routes: Routes = [{path: '', component: BioAsesoramientoPagoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BioAsesoramientoPagoRoutingModule { }
