import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepositoryTratamientoDatosComponent} from './repository-tratamiento-datos.component';
import {RoutingPathAdmin} from '../../../../routing-path-admin';

const routes: Routes = [
  {path: '', component: RepositoryTratamientoDatosComponent},
  {
    path: RoutingPathAdmin.LOGGED_IN_ROUTING.pages.tratamiento.pages.form_datos_personales.path,
    loadChildren: './pages/form-datos-personales/form-datos-personales.module#FormDatosPersonalesModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoryTratamientoDatosRoutingModule { }
