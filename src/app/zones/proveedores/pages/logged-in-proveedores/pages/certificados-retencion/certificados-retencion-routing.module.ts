import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CerficadosRetencionComponent} from './cerficados-retencion.component';

const routes: Routes = [{path: '', component: CerficadosRetencionComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificadosRetencionRoutingModule { }
