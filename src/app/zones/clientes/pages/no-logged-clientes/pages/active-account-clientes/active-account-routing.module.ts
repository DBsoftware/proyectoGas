import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ActiveAccountClientesComponent} from './active-account-clientes.component';
import {ActiveAccountUsuarioGuard} from '../../../../services/no-logged/guards/active-account/active-account-usuario.guard';

const routes: Routes = [
    {
      path: '',
      component: ActiveAccountClientesComponent,
      canActivate: [ActiveAccountUsuarioGuard]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiveAccountRoutingModule { }
