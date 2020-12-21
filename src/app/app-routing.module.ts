import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RoutingPath} from './routing-path';
import {AppNotFoundComponent} from './app-not-found/app-not-found.component';
const routes: Routes = [
    {
      path: RoutingPath.APP_ROUTING.pages.administrador.path,
      loadChildren: './zones/administrador/administrador.module#AdministradorModule'
    },
    {
      path: RoutingPath.APP_ROUTING.pages.clientes.path,
      loadChildren: './zones/clientes/clientes.module#ClientesModule'
    },
    {
      path: RoutingPath.APP_ROUTING.pages.proveedores.path,
      loadChildren: './zones/proveedores/proveedores.module#ProveedoresModule'
    },
    {
      path: RoutingPath.APP_ROUTING.pages.colaboradores.path,
      loadChildren: './zones/colaboradores/colaboradores.module#ColaboradoresModule'
    },
    {
      path: RoutingPath.APP_ROUTING.pages.not_found.path,
      component: AppNotFoundComponent
    },
    {
      path: '**',
      redirectTo: RoutingPath.APP_ROUTING.pages.not_found.path,
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
