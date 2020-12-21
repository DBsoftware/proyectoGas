import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutingPathClientes} from '../../routing-path-clientes';
import {NoLoggedClientesComponent} from './no-logged-clientes.component';
import {ActiveAccountUsuarioGuard} from '../../services/no-logged/guards/active-account/active-account-usuario.guard';
import {AuthNoLoggedGuard} from '../../../../services/guard/auth-no-logged.guard';

const routes: Routes = [
  {
    path: '',
    component: NoLoggedClientesComponent,
    children: [
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.iniciar_sesion.path,
        loadChildren: './pages/iniciar-sesion-clientes/iniciar-sesion-clientes.module#IniciarSesionClientesModule',
        canActivate: [AuthNoLoggedGuard]
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.registrer.path,
        loadChildren: './pages/registrer-clientes/registrer-clientes.module#RegistrerClientesModule',
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.active_account.path,
        loadChildren: './pages/active-account-clientes/active-account-clientes.module#ActiveAccountClientesModule',
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.forget_password.path,
        loadChildren: './pages/forget-password-clientes/forget-password-clientes.module#ForgetPasswordClientesModule'
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.forget_password_form.path,
        loadChildren: './pages/forget-password-form-clientes/forget-password-form-clientes.module#ForgetPasswordFormClientesModule'
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.centros_de_atencion_y_puntos_de_recepcion.path,
        loadChildren: './pages/centro-atencion-map-clientes/centro-atencion-map-clientes.module#CentroAtencionMapClientesModule'
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.recaudadores_clientes.path,
        loadChildren: './pages/recaudadores-clientes/recaudadores-clientes.module#RecaudadoresClientesModule'
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.ventas_solicitud_certificado.path,
        loadChildren: './pages/ventas-solicitud-certificado-clientes/ventas-solicitud-certificado-clientes.module#VentasSolicitudCertificadoClientesModule'
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.solicitud_expansion.path,
        loadChildren: './pages/ventas-solicitud-expansion-clientes/ventas-solicitud-expansion-clientes.module#VentasSolicitudExpansionClientesModule'
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.ventas_hogares.path,
        loadChildren: './pages/ventas-hogares-clientes/ventas-hogares-clientes.module#VentasHogaresClientesModule'
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.ventas_comercios.path,
        loadChildren: './pages/ventas-comercios-clientes/ventas-comercios-clientes.module#VentasComerciosClientesModule'
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.ventas_grandes_clientes.path,
        loadChildren: './pages/ventas-constructuras-grandes-clientes/ventas-constructuras-grandes-clientes.module#VentasConstructurasGrandesClientesModule'
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.grandes_clientes_solicitud.path,
        loadChildren: './pages/grandes-clientes/grandes-clientes.module#GrandesClientesModule'
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.gnv_ubicacion_estacion.path,
        loadChildren: './pages/gnv-ubicacion-estaciones-clientes/gnv-ubicacion-estaciones-clientes.module#GnvUbicacionEstacionesClientesModule'
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.gnv_sugerencias.path,
        loadChildren: './pages/gnv-sugerencias-clientes/gnv-sugerencias-clientes.module#GnvSugerenciasClientesModule'
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.linea_etica.path,
        loadChildren: './pages/linea-etica-clientes/linea-etica-clientes.module#LineaEticaClientesModule'
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.bio_disposicion_final.path,
        loadChildren: './pages/bio-disposicion-residuos-particulares-clientes/bio-disposicion-residuos-particulares-clientes.module#BioDisposicionResiduosParticularesClientesModule'
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.bio_residuos_construccion.path,
        loadChildren: './pages/bio-residuos-construccion-clientes/bio-residuos-construccion-clientes.module#BioResiduosConstruccionClientesModule'
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.bio_residuos_eventos_especiales.path,
        loadChildren: './pages/bio-eventos-espaciales-clientes/bio-eventos-espaciales-clientes.module#BioEventosEspacialesClientesModule'
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.bio_residuos_eventos_especiales.path,
        loadChildren: './pages/bio-eventos-espaciales-clientes/bio-eventos-espaciales-clientes.module#BioEventosEspacialesClientesModule'
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.bio_asesoramiento_pagos.path,
        loadChildren: './pages/bio-asesoramiento-pago/bio-asesoramiento-pago.module#BioAsesoramientoPagoModule'
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.bio_residuos_especiales_nocompactables.path,
        loadChildren: './pages/bio-residuos-especiales-nocompactables-clientes/bio-residuos-especiales-nocompactables-clientes.module#BioResiduosEspecialesNocompactablesClientesModule'
      },
      {
        path: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.bio_jardineria.path,
        loadChildren: './pages/bio-jardineria-clientes/bio-jardineria-clientes.module#BioJardineriaClientesModule'
      },
      {
        path: '',
        redirectTo: RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.iniciar_sesion.path,
        pathMatch: 'full'
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ActiveAccountUsuarioGuard]
})
export class NoLoggedClientesRoutingModule { }
