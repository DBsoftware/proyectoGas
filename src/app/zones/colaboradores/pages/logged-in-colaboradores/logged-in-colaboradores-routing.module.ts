import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedInColaboradoresComponent} from './logged-in-colaboradores.component';
import {RoutingPathColaboradores} from '../../routing-path-colaboradores';

const routes: Routes = [
    {
      path: '', component: LoggedInColaboradoresComponent,
      children: [
        {
          path: RoutingPathColaboradores.LOGGED_IN_ROUTING.pages.formulario_colaboradores.path,
          loadChildren: './pages/formulario-contacto-colaboradores/formulario-contacto-colaboradores.module#FormularioContactoColaboradoresModule'
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedInColaboradoresRoutingModule { }
