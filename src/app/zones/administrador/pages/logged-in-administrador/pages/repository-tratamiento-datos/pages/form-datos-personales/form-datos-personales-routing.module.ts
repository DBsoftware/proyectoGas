import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormDatosPersonalesComponent} from './form-datos-personales.component';

const routes: Routes = [
  {path: '', component: FormDatosPersonalesComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormDatosPersonalesRoutingModule { }
