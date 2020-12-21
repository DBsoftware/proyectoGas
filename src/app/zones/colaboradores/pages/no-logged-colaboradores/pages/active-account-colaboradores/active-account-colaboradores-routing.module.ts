import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ActiveAccountColaboradoresComponent} from './active-account-colaboradores.component';
import {ActiveAccountColaboradoresGuard} from '../../../../services/guards/active-account-colaboradores/active-account-colaboradores.guard';

const routes: Routes = [
    {
      path: '',
      component: ActiveAccountColaboradoresComponent,
      canActivate: [ActiveAccountColaboradoresGuard]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ActiveAccountColaboradoresGuard]
})
export class ActiveAccountColaboradoresRoutingModule { }
