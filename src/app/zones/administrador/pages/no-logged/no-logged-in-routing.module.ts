import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoLoggedComponent} from './no-logged.component';
import {RoutingPathAdmin} from '../../routing-path-admin';

const routes: Routes = [
    {
      path: '',
      component: NoLoggedComponent,
      children: [
        {
          path: RoutingPathAdmin.NO_LOGGED_IN_ROUTING.pages.login.path,
          loadChildren: './pages/login/login.module#LoginModule',
        },
        {
          path: '',
          redirectTo: RoutingPathAdmin.NO_LOGGED_IN_ROUTING.pages.login.path,
          pathMatch: 'full'
        },
      ]
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoLoggedInRoutingModule { }
