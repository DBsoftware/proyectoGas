import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EnvioFacturaMedioCorreoClientesComponent} from './envio-factura-medio-correo-clientes.component';

const routes: Routes = [{path: '', component: EnvioFacturaMedioCorreoClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnvioFacturaMedioCorreoClientesRoutingModule { }
