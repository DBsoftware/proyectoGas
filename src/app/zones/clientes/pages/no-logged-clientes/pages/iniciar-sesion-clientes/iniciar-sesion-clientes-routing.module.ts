import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IniciarSesionClientesComponent} from './iniciar-sesion-clientes.component';
import {AuthNoLoggedGuard} from '../../../../../../services/guard/auth-no-logged.guard';

const routes: Routes = [
    {
      path: '', component: IniciarSesionClientesComponent,
      canActivate: [AuthNoLoggedGuard]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IniciarSesionClientesRoutingModule { }
