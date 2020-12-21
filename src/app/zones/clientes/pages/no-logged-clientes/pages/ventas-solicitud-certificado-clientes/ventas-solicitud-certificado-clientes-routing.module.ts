import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VentasSolicitudCertificadoClientesComponent} from './ventas-solicitud-certificado-clientes.component';

const routes: Routes = [{path: '', component: VentasSolicitudCertificadoClientesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasSolicitudCertificadoClientesRoutingModule { }
