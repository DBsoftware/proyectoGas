import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForgetPasswordProveedoresFormComponent} from './forget-password-proveedores-form.component';
import {ForgetPasswordProveedoresGuard} from '../../../../services/guards/forget-password-proveedores/forget-password-proveedores.guard';

const routes: Routes = [
    {
      path: '',
      component: ForgetPasswordProveedoresFormComponent,
      canActivate: [ForgetPasswordProveedoresGuard]
    }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgetPasswordProveedoresFormRoutingModule { }
