import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RoutingPathClientes} from './routing-path-clientes';
import {AuthNoLoggedGuard} from '../../services/guard/auth-no-logged.guard';
import {AuthLoggedInGuard} from '../../services/guard/auth-logged-in.guard';
import {RoutingPath} from '../../routing-path';

const routes: Routes = [
  {
    path: RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path,
    loadChildren: './pages/no-logged-clientes/no-logged-clientes.module#NoLoggedClientesModule',
    data: {
      url: RoutingPath.APP_ROUTING.pages.clientes.path
    },
    canActivate: [AuthNoLoggedGuard],
  },
  {
    path: RoutingPathClientes.CLIENTES_ROUTING.pages.logged_in.path,
    loadChildren: './pages/logged-in-clientes/logged-in-clientes.module#LoggedInClientesModule',
    data: {
      url: RoutingPath.APP_ROUTING.pages.clientes.path
    },
    canActivate: [AuthLoggedInGuard],
  },
  {
    path: '',
    redirectTo: `/*${ RoutingPath.APP_ROUTING.pages.clientes.path }/${RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path}`
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule {
}
