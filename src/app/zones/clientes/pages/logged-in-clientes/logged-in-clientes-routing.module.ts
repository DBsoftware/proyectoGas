import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedInClientesComponent} from './logged-in-clientes.component';
import {RoutingPathClientes} from '../../routing-path-clientes';

const routes: Routes = [
  {
    path: '',
    component: LoggedInClientesComponent,
    children: [
      {
        path: RoutingPathClientes.LOGGED_IN_ROUTING.pages.profile.path,
        loadChildren: './pages/profile-clientes/profile-clientes.module#ProfileClientesModule'
      },
      {
        path: RoutingPathClientes.LOGGED_IN_ROUTING.pages.pqr.path,
        loadChildren: './pages/pqr-clientes/pqr-clientes.module#PqrClientesModule'
      },
      {
        path: RoutingPathClientes.LOGGED_IN_ROUTING.pages.reporte_fugas.path,
        loadChildren: './pages/reporte-de-fugas-clientes/reporte-de-fugas-clientes.module#ReporteDeFugasClientesModule'
      },
      {
        path: RoutingPathClientes.LOGGED_IN_ROUTING.pages.consulta_de_avisos.path,
        loadChildren: './pages/consulta-avisos-clientes/consulta-avisos-clientes.module#ConsultaAvisosClientesModule'
      },
      {
        path: RoutingPathClientes.LOGGED_IN_ROUTING.pages.estado_cuenta_financiacion.path,
        loadChildren: './pages/estado-de-financiacion-clientes/estado-de-financiacion-clientes.module#EstadoDeFinanciacionClientesModule'
      },
      {
        path: RoutingPathClientes.LOGGED_IN_ROUTING.pages.resuelve_tu_deuda.path,
        loadChildren: './pages/resuelve-tu-deuda-clientes/resuelve-tu-deuda-clientes.module#ResuelveTuDeudaClientesModule'
      },
      {
        path: RoutingPathClientes.LOGGED_IN_ROUTING.pages.consulta_fecha_de_vencimiento.path,
        loadChildren: './pages/consultas-fechas-vencimiento-clientes/consultas-fechas-vencimiento-clientes.module#ConsultasFechasVencimientoClientesModule'
      },
      {
        path: RoutingPathClientes.LOGGED_IN_ROUTING.pages.consulta_factura.path,
        loadChildren: './pages/consulta-factura-clientes/consulta-factura-clientes.module#ConsultaFacturaClientesModule'
      },
      {
        path: RoutingPathClientes.LOGGED_IN_ROUTING.pages.inscripcion_envio_factura.path,
        loadChildren: './pages/envio-factura-medio-correo-clientes/envio-factura-medio-correo-clientes.module#EnvioFacturaMedioCorreoClientesModule'
      },
      {
        path: RoutingPathClientes.LOGGED_IN_ROUTING.pages.consulta_fecha_entrega_factura.path,
        loadChildren: './pages/consulta-fecha-entrega-factura-clientes/consulta-fecha-entrega-factura-clientes.module#ConsultaFechaEntregaFacturaClientesModule'
      },
      {
        path: RoutingPathClientes.LOGGED_IN_ROUTING.pages.inscripcion_envio_factura.path,
        loadChildren: './pages/envio-factura-medio-correo-clientes/envio-factura-medio-correo-clientes.module#EnvioFacturaMedioCorreoClientesModule'
      },
      {
        path: RoutingPathClientes.LOGGED_IN_ROUTING.pages.bio_frecuenca_recoleccion.path,
        loadChildren: './pages/bio-frecuencia-recoleccion-barrido-clientes/bio-frecuencia-recoleccion-barrido-clientes.module#BioFrecuenciaRecoleccionBarridoClientesModule'
      },
      {
        path: RoutingPathClientes.LOGGED_IN_ROUTING.pages.bio_estado_cuenta_financiacion.path,
        loadChildren: './pages/estado-cuenta-financiacion-clientes/estado-cuenta-financiacion-clientes.module#EstadoCuentaFinanciacionClientesModule'
      },
      {
        path: RoutingPathClientes.LOGGED_IN_ROUTING.pages.ventas_solicitud_servicio.path,
        loadChildren: './pages/ventas-solicitud-postventa-clientes/ventas-solicitud-postventa-clientes.module#VentasSolicitudPostventaClientesModule'
      },
      {
        path: RoutingPathClientes.LOGGED_IN_ROUTING.pages.ventas_solicitud_servicio.path,
        loadChildren: './pages/ventas-solicitud-postventa-clientes/ventas-solicitud-postventa-clientes.module#VentasSolicitudPostventaClientesModule'
      },
    ]
  },


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedInClientesRoutingModule { }
