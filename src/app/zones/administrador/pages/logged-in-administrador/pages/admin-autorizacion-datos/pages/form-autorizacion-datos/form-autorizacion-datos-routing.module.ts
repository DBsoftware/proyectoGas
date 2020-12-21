import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormAutorizacionDatosComponent} from './form-autorizacion-datos.component';

const routes: Routes = [{path: '', component: FormAutorizacionDatosComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormAutorizacionDatosRoutingModule { }
