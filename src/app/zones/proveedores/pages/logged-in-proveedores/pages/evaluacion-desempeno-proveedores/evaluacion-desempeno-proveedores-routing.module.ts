import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EvaluacionDesempenoProveedoresComponent} from './evaluacion-desempeno-proveedores.component';

const routes: Routes = [
    {
    path: '',
    component: EvaluacionDesempenoProveedoresComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluacionDesempenoProveedoresRoutingModule { }
