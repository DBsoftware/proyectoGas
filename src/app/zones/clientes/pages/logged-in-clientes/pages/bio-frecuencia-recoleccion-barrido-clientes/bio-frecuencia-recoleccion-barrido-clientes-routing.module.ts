import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BioFrecuenciaRecoleccionBarridoClientesComponent} from './bio-frecuencia-recoleccion-barrido-clientes.component';

const routes: Routes = [{path: '', component: BioFrecuenciaRecoleccionBarridoClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BioFrecuenciaRecoleccionBarridoClientesRoutingModule { }
