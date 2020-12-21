import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResetPasswordColaboradoresComponent} from './reset-password-colaboradores.component';

const routes: Routes = [
    {
      path: '',
      component: ResetPasswordColaboradoresComponent,
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetPasswordColaboradoresRoutingModule { }
