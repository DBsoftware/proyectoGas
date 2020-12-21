import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedInAdministradorComponent} from './logged-in-administrador.component';
import {RoutingPathAdmin} from '../../routing-path-admin';
const routes: Routes = [
  {
    path: '',
    component: LoggedInAdministradorComponent,
    children: [
      {
        path: RoutingPathAdmin.LOGGED_IN_ROUTING.pages.tratamiento.path,
        loadChildren: './pages/repository-tratamiento-datos/repository-tratamiento-datos.module#RepositoryTratamientoDatosModule'
      },
      {
        path: RoutingPathAdmin.LOGGED_IN_ROUTING.pages.autorizacion.path,
        loadChildren: './pages/admin-autorizacion-datos/admin-autorizacion-datos.module#AdminAutorizacionDatosModule'
      },
      {
        path: RoutingPathAdmin.LOGGED_IN_ROUTING.pages.convocatorias.path,
        loadChildren: './pages/admin-convocatorias/admin-convocatorias.module#AdminConvocatoriasModule'
      },
      {
        path: RoutingPathAdmin.LOGGED_IN_ROUTING.pages.evaluacion_desempeno.path,
        loadChildren: './pages/admin-evaluacion-desempeno/admin-evaluacion-desempeno.module#AdminEvaluacionDesempenoModule'
      },
      {
        path: RoutingPathAdmin.LOGGED_IN_ROUTING.pages.account_proveedor.path,
        loadChildren: './pages/admin-account-proveedores/admin-account-proveedores.module#AdminAccountProveedoresModule'
      },
      {
        path: RoutingPathAdmin.LOGGED_IN_ROUTING.linea_etica.path,
        loadChildren: './pages/admin-linea-etica/admin-linea-etica.module#AdminLineaEticaModule'
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoggedInRoutingAdministradorModule { }
