import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormularioContactoColaboradoresComponent} from './formulario-contacto-colaboradores.component';

const routes: Routes = [{path: '', component: FormularioContactoColaboradoresComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioContactoColaboradoresRoutingModule { }
