import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForgetPasswordFormClientesComponent} from './forget-password-form-clientes.component';
import {ForgetPasswordClientesGuard} from '../../../../services/no-logged/guards/forget-password-clientes/forget-password-clientes.guard';
const routes: Routes = [
  {
    path: '',
    component: ForgetPasswordFormClientesComponent,
    canActivate: [ForgetPasswordClientesGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ForgetPasswordFormClientesRoutingModule { }
