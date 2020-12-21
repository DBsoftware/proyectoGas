import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutingPathAdmin} from './routing-path-admin';
import {AuthLoggedInGuard} from '../../services/guard/auth-logged-in.guard';
import {AuthNoLoggedGuard} from '../../services/guard/auth-no-logged.guard';
import {RoutingPath} from '../../routing-path';

const routes: Routes = [
        {
          path: RoutingPathAdmin.ADMINISTRAR_ROUTING.pages.no_logged.path,
          loadChildren: './pages/no-logged/no-logged.module#NoLoggedModule',
            canActivate: [AuthNoLoggedGuard],
        },
        {
          path: RoutingPathAdmin.ADMINISTRAR_ROUTING.pages.logged_in.path,
          loadChildren: './pages/logged-in-administrador/logged-in-administrador.module#LoggedInAdministradorModule',
          data: {
            url: RoutingPath.APP_ROUTING.pages.administrador.path
          },
           canActivate: [AuthLoggedInGuard]
        },
        {
          path: '**',
          redirectTo: `/${ RoutingPath.APP_ROUTING.pages.administrador.path }/${ RoutingPathAdmin.ADMINISTRAR_ROUTING.pages.no_logged.path }`
        }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorRoutingModule { }
