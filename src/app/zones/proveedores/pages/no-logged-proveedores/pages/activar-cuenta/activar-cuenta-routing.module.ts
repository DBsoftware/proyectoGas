import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ActiveAccountProveedoresGuard} from '../../../../services/guards/active-account/active-account-proveedores.guard';
import {ActivarCuentaComponent} from './activar-cuenta.component';

const routes: Routes = [
  {
    path: '',
    component: ActivarCuentaComponent,
    canActivate: [ActiveAccountProveedoresGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivarCuentaRoutingModule { }
