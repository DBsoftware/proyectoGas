import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutingPathProveedores} from './routing-path-proveedores';
import {RoutingPath} from '../../routing-path';
import {AuthNoLoggedGuard} from '../../services/guard/auth-no-logged.guard';
import {AuthLoggedInGuard} from '../../services/guard/auth-logged-in.guard';

const routes: Routes = [
  {
    path: RoutingPathProveedores.PROVEEDORES_ROUTING.pages.no_logged.path,
    loadChildren: './pages/no-logged-proveedores/no-logged-proveedores.module#NoLoggedProveedoresModule',
    data: {
      url: RoutingPath.APP_ROUTING.pages.proveedores.path
    },
    canActivate: [AuthNoLoggedGuard],
  },
  {
    path: RoutingPathProveedores.PROVEEDORES_ROUTING.pages.logged_in.path,
    loadChildren: './pages/logged-in-proveedores/logged-in-proveedores.module#LoggedInProveedoresModule',
    data: {
      url: RoutingPath.APP_ROUTING.pages.proveedores.path
    },
    canActivate: [AuthLoggedInGuard],
  },
  {
    path: '',
    redirectTo: `/*${ RoutingPath.APP_ROUTING.pages.proveedores.path }/${RoutingPathProveedores.PROVEEDORES_ROUTING.pages.no_logged.path}`
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }
