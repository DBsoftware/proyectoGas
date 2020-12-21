import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../config/app-config';
import {GeneralResponse} from '../../interfaces/general-response';
import {delay, map} from 'rxjs/operators';
import {MenuRoute} from '../../interfaces/menu-route';
import {RoutingPathClientes} from '../../zones/clientes/routing-path-clientes';
import {Observable, of} from 'rxjs';
import {RoutingPath} from '../../routing-path';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private exposedMenuRoutes: MenuRoute[] = [
    {
      alias: 'Ventas',
      icon:  'comment',
      children: [
        {
          alias: 'Ventas a  Hogares',
          path: `/${RoutingPath.APP_ROUTING.pages.clientes.path}/${RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path}/${RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.ventas_hogares.path}`,
          isExternal: false,
          icon:  'comment'
        },
        {
          alias: 'Solicitud de certificados de disponibilidad',
          path: `/${RoutingPath.APP_ROUTING.pages.clientes.path}/${RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path}/${RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.ventas_solicitud_certificado.path}`,
          isExternal: false,
          icon:  'comment'
        },
        {
          alias: 'Ventas a Comercios',
          path: `/${RoutingPath.APP_ROUTING.pages.clientes.path}/${RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path}/${RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.ventas_comercios.path}`,
          isExternal: false,
          icon:  'comment'
        },
        {
          alias: 'Constructoras y nueva edificación',
          path: `/${RoutingPath.APP_ROUTING.pages.clientes.path}/${RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path}/${RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.ventas_grandes_clientes.path}`,
          isExternal: false,
          icon:  'comment'
        },
        {
          alias: 'Solicitud de servicio Grandes Clientes',
          path: `/${RoutingPath.APP_ROUTING.pages.clientes.path}/${RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path}/${RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.grandes_clientes_solicitud.path}`,
          isExternal: false,
          icon:  'comment'
        },
        {
          alias: 'Solicitud de expansión de redes',
          path: `/${RoutingPath.APP_ROUTING.pages.clientes.path}/${RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path}/${RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.solicitud_expansion.path}`,
          isExternal: false,
          icon:  'comment'
        }
      ]
    },
    {
      alias: 'Gas Natural Vehicular',
      icon:  'comment',
      children: [
        {
          alias: 'GNV - Sugerencias',
          path: `/${RoutingPath.APP_ROUTING.pages.clientes.path}/${RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path}/${RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.gnv_sugerencias.path}`,
          isExternal: false,
          icon:  'comment'
        },
        {
          alias: 'GNV - Ubicación estaciones',
          path: `/${RoutingPath.APP_ROUTING.pages.clientes.path}/${RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path}/${RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.gnv_ubicacion_estacion.path}`,
          isExternal: false,
          icon:  'comment'
        },
      ]
    },
    {
      alias: 'Recaudadores',
      path: `/${RoutingPath.APP_ROUTING.pages.clientes.path}/${RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path}/${RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.recaudadores_clientes.path}`,
      isExternal: false,
      icon:  'comment'
    },
    {
      alias: 'Línea Ética',
      path: `/${RoutingPath.APP_ROUTING.pages.clientes.path}/${RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path}/${RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.linea_etica.path}`,
      isExternal: false,
      icon:  'comment'
    },
    {
      alias: 'Bioagricola',
      icon:  'comment',
      children: [
        {
          alias: 'BIO - Eventos Especiales',
          path: `/${RoutingPath.APP_ROUTING.pages.clientes.path}/${RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path}/${RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.bio_residuos_eventos_especiales.path}`,
          isExternal: false,
          icon:  'comment'
        },
        {
          alias: 'BIO - Residuos Especiales no Compactables',
          path: `/${RoutingPath.APP_ROUTING.pages.clientes.path}/${RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path}/${RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.bio_residuos_especiales_nocompactables.path}`,
          isExternal: false,
          icon:  'comment'
        },
        {
          alias: 'BIO - Residuos de Construcción',
          path: `/${RoutingPath.APP_ROUTING.pages.clientes.path}/${RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path}/${RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.bio_residuos_construccion.path}`,
          isExternal: false,
          icon:  'comment'
        },
        {
          alias: 'BIO - Disposición de Residuos Particulares',
          path: `/${RoutingPath.APP_ROUTING.pages.clientes.path}/${RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path}/${RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.bio_disposicion_final.path}`,
          isExternal: false,
          icon:  'comment'
        },
        {
          alias: 'BIO - Asesoramiento de pago',
          path: `/${RoutingPath.APP_ROUTING.pages.clientes.path}/${RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path}/${RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.bio_asesoramiento_pagos.path}`,
          isExternal: false,
          icon:  'comment'
        },
        {
          alias: 'BIO - Jardinería',
          path: `/${RoutingPath.APP_ROUTING.pages.clientes.path}/${RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path}/${RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.bio_jardineria.path}`,
          isExternal: false,
          icon:  'comment'
        }
      ]
    },
    {
      alias: 'Centro de atención',
      path: `/${RoutingPath.APP_ROUTING.pages.clientes.path}/${RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path}/${RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.centros_de_atencion_y_puntos_de_recepcion.path}`,
      isExternal: false,
      icon:  'comment'
    },
    {
      alias: 'Pagar factura',
      path: 'http://190.60.226.203:8092/wspse/',
      isExternal: true,
      icon:  'comment'
    },
    {
      alias: 'Solicitud de crédito EDS',
      path: 'https://docs.google.com/forms/d/1wJutK2tgrQbeljyGjitJeWOwmBA2pwykpPt1_bN26KA/viewform?edit_requested=trueg',
      isExternal: true,
      icon:  'comment'
    }
  ];
  private userMenuRoutes: MenuRoute[] = [
    {
      path: '/' + RoutingPath.APP_ROUTING.pages.clientes.path + '/' + RoutingPathClientes.CLIENTES_ROUTING.pages.logged_in.path + RoutingPathClientes.LOGGED_IN_ROUTING.pages.pqr.path,
      alias: 'Peticiones quejas y reclamos',
      icon: 'supervised_user_circle'
    },
    {
      path: '/' + RoutingPath.APP_ROUTING.pages.clientes.path + '/' + RoutingPathClientes.CLIENTES_ROUTING.pages.logged_in.path + RoutingPathClientes.LOGGED_IN_ROUTING.pages.estado_cuenta_financiacion.path,
      alias: 'Estado de cuenta financiación',
      icon: 'supervised_user_circle'
    },
    {
      path: '/' + RoutingPath.APP_ROUTING.pages.clientes.path + '/' + RoutingPathClientes.CLIENTES_ROUTING.pages.logged_in.path + RoutingPathClientes.LOGGED_IN_ROUTING.pages.consulta_fecha_de_vencimiento.path,
      alias: 'Consulta de fechas de Vencimiento',
      icon: 'supervised_user_circle'
    },
    {
      path: '/' + RoutingPath.APP_ROUTING.pages.clientes.path + '/' + RoutingPathClientes.CLIENTES_ROUTING.pages.logged_in.path + RoutingPathClientes.LOGGED_IN_ROUTING.pages.consulta_de_avisos.path,
      alias: 'Consulta de avisos',
      icon: 'supervised_user_circle'
    },
    {
      path: '/' + RoutingPath.APP_ROUTING.pages.clientes.path + '/' + RoutingPathClientes.CLIENTES_ROUTING.pages.logged_in.path + RoutingPathClientes.LOGGED_IN_ROUTING.pages.resuelve_tu_deuda.path,
      alias: 'Resuelve tu deuda',
      icon: 'supervised_user_circle'
    },
    {
      path: '/' + RoutingPath.APP_ROUTING.pages.clientes.path + '/' + RoutingPathClientes.CLIENTES_ROUTING.pages.logged_in.path + RoutingPathClientes.LOGGED_IN_ROUTING.pages.reporte_fugas.path,
      alias: 'Reporte de fugas',
      icon: 'supervised_user_circle'
    },
    {
      path: '/' + RoutingPath.APP_ROUTING.pages.clientes.path + '/' + RoutingPathClientes.CLIENTES_ROUTING.pages.logged_in.path + RoutingPathClientes.LOGGED_IN_ROUTING.pages.ventas_solicitud_servicio.path,
      alias: 'Post venta reparación',
      icon: 'supervised_user_circle'
    },
    {
      path: '/' + RoutingPath.APP_ROUTING.pages.clientes.path + '/' + RoutingPathClientes.CLIENTES_ROUTING.pages.logged_in.path + RoutingPathClientes.LOGGED_IN_ROUTING.pages.bio_frecuenca_recoleccion.path,
      alias: 'Frecuencia de recolección',
      icon: 'supervised_user_circle'
    },
    {
      path: '/' + RoutingPath.APP_ROUTING.pages.clientes.path + '/' + RoutingPathClientes.CLIENTES_ROUTING.pages.logged_in.path + RoutingPathClientes.LOGGED_IN_ROUTING.pages.consulta_factura.path,
      alias: 'Consulta tu factura',
      icon: 'supervised_user_circle'
    },
    {
      path: '/' + RoutingPath.APP_ROUTING.pages.clientes.path + '/' + RoutingPathClientes.CLIENTES_ROUTING.pages.logged_in.path + RoutingPathClientes.LOGGED_IN_ROUTING.pages.inscripcion_envio_factura.path,
      alias: 'Inscripción envío de factura',
      icon: 'supervised_user_circle'
    },
    {
      path: '/' + RoutingPath.APP_ROUTING.pages.clientes.path + '/' + RoutingPathClientes.CLIENTES_ROUTING.pages.logged_in.path + RoutingPathClientes.LOGGED_IN_ROUTING.pages.consulta_fecha_entrega_factura.path,
      alias: 'Fecha de entrega de envío de factura',
      icon: 'supervised_user_circle'
    },
    {
      path: '/' + RoutingPath.APP_ROUTING.pages.clientes.path + '/' + RoutingPathClientes.CLIENTES_ROUTING.pages.logged_in.path + RoutingPathClientes.LOGGED_IN_ROUTING.pages.bio_estado_cuenta_financiacion.path,
      alias: 'Estado de financiación',
      icon: 'supervised_user_circle'
    },
  ];


  constructor(private http: HttpClient) { }
  getExposedMenu(zoneId: number): Observable<any> {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }zone/${ zoneId }/permissions`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(response => {
        switch (response.status) {
          case 200:
            return response.body.data;
        }
      })
      );
     /* return of(this.exposedMenuRoutes)
      .pipe(
        delay(1000)
      ); */
  }
  getUserMenu(zoneId: number): Observable<any> {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }zone/${ zoneId }/permissions`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.xParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 204:
              return [];
            default:
              return response.body.data;
          }
        })
      );
   /* return of(this.userMenuRoutes)
      .pipe(delay(1000)); */
  }
}
