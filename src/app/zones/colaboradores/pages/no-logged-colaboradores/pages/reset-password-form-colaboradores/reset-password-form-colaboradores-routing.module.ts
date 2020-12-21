import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForgetPasswordColaboradoresGuard} from '../../../../services/guards/forget-password-colaboradores/forget-password-colaboradores.guard';
import {ResetPasswordFormColaboradoresComponent} from './reset-password-form-colaboradores.component';

const routes: Routes = [
  {
    path: '',
    component: ResetPasswordFormColaboradoresComponent,
    canActivate: [ForgetPasswordColaboradoresGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetPasswordFormColaboradoresRoutingModule { }
