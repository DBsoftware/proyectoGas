import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingPathColaboradores} from './routing-path-colaboradores';
import {RoutingPath} from '../../routing-path';
import {AuthNoLoggedGuard} from '../../services/guard/auth-no-logged.guard';
import {AuthLoggedInGuard} from '../../services/guard/auth-logged-in.guard';

const routes: Routes = [
  {
    path: RoutingPathColaboradores.COLABORADORES_ROUTING.pages.no_logged.path,
    loadChildren: './pages/no-logged-colaboradores/no-logged-colaboradores.module#NoLoggedColaboradoresModule',
    data: {
      url: RoutingPath.APP_ROUTING.pages.colaboradores.path
    },
    canActivate: [AuthNoLoggedGuard],
  },
  {
    path: RoutingPathColaboradores.COLABORADORES_ROUTING.pages.logged_in.path,
    loadChildren: './pages/logged-in-colaboradores/logged-in-colaboradores.module#LoggedInColaboradoresModule',
    data: {
      url: RoutingPath.APP_ROUTING.pages.colaboradores.path
    },
    canActivate: [AuthLoggedInGuard],
  },
  {
    path: '',
    redirectTo: `/*${ RoutingPath.APP_ROUTING.pages.colaboradores.path }/${RoutingPathColaboradores.COLABORADORES_ROUTING.pages.no_logged.path}`
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaboradoresRoutingModule { }
