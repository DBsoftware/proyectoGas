import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileClientesComponent} from './profile-clientes.component';

const routes: Routes = [{path: '', component: ProfileClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileClientesRoutingModule { }
