import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoLoggedColaboradoresComponent} from './no-logged-colaboradores.component';
import {AuthNoLoggedGuard} from '../../../../services/guard/auth-no-logged.guard';
import {RoutingPathColaboradores} from '../../routing-path-colaboradores';

const routes: Routes = [
  {
    path: '',
    component: NoLoggedColaboradoresComponent,
    children: [
      {
        path: RoutingPathColaboradores.NO_LOGGED_IN_ROUTING.pages.iniciar_sesion.path,
        loadChildren: './pages/login-colaboradores/login-colaboradores.module#LoginColaboradoresModule',
      },
      {
        path: RoutingPathColaboradores.NO_LOGGED_IN_ROUTING.pages.registrer.path,
        loadChildren: './pages/registro-colaborador/registro-colaborador.module#RegistroColaboradorModule',
      },
      {
        path: RoutingPathColaboradores.NO_LOGGED_IN_ROUTING.pages.active_account.path,
        loadChildren: './pages/active-account-colaboradores/active-account-colaboradores.module#ActiveAccountColaboradoresModule',
      },
      {
        path: RoutingPathColaboradores.NO_LOGGED_IN_ROUTING.pages.forget_password.path,
        loadChildren: './pages/reset-password-colaboradores/reset-password-colaboradores.module#ResetPasswordColaboradoresModule'
      },
      {
        path: RoutingPathColaboradores.NO_LOGGED_IN_ROUTING.pages.forget_password_form.path,
        loadChildren: './pages/reset-password-form-colaboradores/reset-password-form-colaboradores.module#ResetPasswordFormColaboradoresModule'
      },
      {
        path: '',
        redirectTo: RoutingPathColaboradores.NO_LOGGED_IN_ROUTING.pages.iniciar_sesion.path,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: RoutingPathColaboradores.NO_LOGGED_IN_ROUTING.pages.iniciar_sesion.path,
    pathMatch: 'full'
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoLoggedColaboradoresRoutingModule { }
