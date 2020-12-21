import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RoutingPathProveedores} from '../../routing-path-proveedores';
import {NoLoggedProveedoresComponent} from './no-logged-proveedores.component';

const routes: Routes = [
  {
    path: '',
    component: NoLoggedProveedoresComponent,
    children: [
      {
        path: RoutingPathProveedores.NO_LOGGED_IN_ROUTING.pages.active_account.path,
        loadChildren: './pages/activar-cuenta/activar-cuenta.module#ActivarCuentaModule',
      },
      {
        path: RoutingPathProveedores.NO_LOGGED_IN_ROUTING.pages.forget_password_form.path,
        loadChildren: './pages/forget-password-proveedores-form/forget-password-proveedores-form.module#ForgetPasswordProveedoresFormModule',
      },
      {
        path: RoutingPathProveedores.NO_LOGGED_IN_ROUTING.pages.forget_password.path,
        loadChildren: './pages/forget-password-proveedores/forget-password-proveedores.module#ForgetPasswordProveedoresModule',
      },
      {
        path: RoutingPathProveedores.NO_LOGGED_IN_ROUTING.pages.registrer.path,
        loadChildren: './pages/registro-proveedores/registro-proveedores.module#RegistroProveedoresModule',
      },
      {
        path: RoutingPathProveedores.NO_LOGGED_IN_ROUTING.pages.iniciar_sesion.path,
        loadChildren: './pages/login-proveedores/login-proveedores.module#LoginProveedoresModule',
      },
      {
        path: '',
        redirectTo: RoutingPathProveedores.NO_LOGGED_IN_ROUTING.pages.iniciar_sesion.path,
        pathMatch: 'full'
      }
    ],
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoLoggedProveedoresRoutingModule { }
