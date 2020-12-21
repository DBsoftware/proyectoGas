import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminAutorizacionDatosComponent} from './admin-autorizacion-datos.component';
import {RoutingPathAdmin} from '../../../../routing-path-admin';

const routes: Routes =
  [
    {
      path: '', component: AdminAutorizacionDatosComponent
    },
    {
      path: RoutingPathAdmin.LOGGED_IN_ROUTING.pages.tratamiento.pages.form_datos_personales.path,
      loadChildren: './pages/form-autorizacion-datos/form-autorizacion-datos.module#FormAutorizacionDatosModule'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAutorizacionDatosRoutingModule { }
