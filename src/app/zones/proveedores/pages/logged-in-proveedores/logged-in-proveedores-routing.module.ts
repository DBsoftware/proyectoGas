import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedInProveedoresComponent} from './logged-in-proveedores.component';
import {RoutingPathProveedores} from '../../routing-path-proveedores';

const routes: Routes = [
    {
      path: '',
      component: LoggedInProveedoresComponent,
      children: [
        {
          path: RoutingPathProveedores.LOGGED_IN_ROUTING.pages.firmas_instaladoras.path,
          loadChildren: './pages/firmas-instaladoras-proveedores/firmas-instaladoras-proveedores.module#FirmasInstaladorasProveedoresModule',
        },
        {
          path: RoutingPathProveedores.LOGGED_IN_ROUTING.pages.certificados_retencion.path,
          loadChildren: './pages/certificados-retencion/certificados-retencion.module#CertificadosRetencionModule',
        },
        {
          path: RoutingPathProveedores.LOGGED_IN_ROUTING.pages.consulta_estado.path,
          loadChildren: './pages/consulta-estado-factura/consulta-estado-factura.module#ConsultaEstadoFacturaModule',
        },
        {
          path: RoutingPathProveedores.LOGGED_IN_ROUTING.pages.convocatoria_proveedores.path,
          loadChildren: './pages/convocatoria-proveedores/convocatoria-proveedores.module#ConvocatoriaProveedoresModule',
        },
        {
          path: RoutingPathProveedores.LOGGED_IN_ROUTING.pages.evaluacion_desempeno.path,
          loadChildren: './pages/evaluacion-desempeno-proveedores/evaluacion-desempeno-proveedores.module#EvaluacionDesempenoProveedoresModule',
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedInProveedoresRoutingModule { }
