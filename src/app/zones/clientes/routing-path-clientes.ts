export class RoutingPathClientes {
  public static CLIENTES_ROUTING = {
    pages: {
      no_logged: {
        path: '',
      },
      logged_in: {
        path: 'usuario',
      },
    }
  };
  public static LOGGED_IN_ROUTING = {
    pages: {
      profile: {
        path: 'perfil',
        pages: {
          cambiar_contraseña: {
            path: 'cambiar-contraseña'
          }
        }
      },
      pqr: {
        path: 'peticiones-quejas-reclamos'
      },
      reporte_fugas: {
        path: 'reporte-de-fugas'
      },
      consulta_de_avisos: {
        path: 'consulta-de-avisos'
      },
      estado_cuenta_financiacion: {
        path: 'estado-cuenta-financiacion'
      },
      resuelve_tu_deuda: {
        path: 'resuelve-tu-deuda'
      },
      consulta_fecha_de_vencimiento: {
        path: 'consulta-fecha-de-vencimiento'
      },
      consulta_factura: {
        path: 'consulta-factura'
      },
      inscripcion_envio_factura: {
        path: 'inscripcion-envio-factura-correo'
      },
      bio_estado_cuenta_financiacion: {
        path: 'bio-estado-cuenta-financiacion'
      },
      consulta_fecha_entrega_factura: {
        path: 'consulta-fecha-entrega-factura'
      },
      bio_frecuenca_recoleccion: {
        path: 'bio-frecuencia-recoleccion-barrido'
      },
      ventas_solicitud_servicio: {
        path: 'solicitud-servicio-post-venta'
      },
      administrar_codigos: {
        path: 'administrar-codigos'
      }
    }
  };
  public static NO_LOGGED_IN_ROUTING = {
    pages: {
      iniciar_sesion: {
        path: 'iniciar-sesion'
      },
      registrer: {
        path: 'registrar'
      },
      active_account: {
        path: ':userId/activar/:token'
      },
      forget_password: {
        path: 'recuperar-contraseña'
      },
      forget_password_form: {
        path: ':userId/restablecer-contrasena/:token'
      },
      recaudadores_clientes: {
        path: 'recaudadores'
      },
      centros_de_atencion_y_puntos_de_recepcion: {
        path: 'centros-de-atencion-y-puntos-recepcion'
      },
      ventas_solicitud_certificado: {
        path: 'solicitud-certificado-disponibilidad'
      },
      solicitud_expansion: {
        path: 'solicitud-expansion-redes'
      },
      ventas_hogares: {
        path: 'ventas-hogares'
      },
      ventas_comercios: {
        path: 'ventas-comercios'
      },
      ventas_grandes_clientes: {
        path: 'ventas-constructoras-grandes-clientes'
      },
      grandes_clientes_solicitud: {
        path: 'grandes-clientes-solicitud-servicio'
      },
      gnv_ubicacion_estacion: {
        path: 'gnv-ubicacion-estaciones'
      },
      gnv_sugerencias: {
        path: 'gnv-sugerencias'
      },
      linea_etica: {
        path: 'linea-de-etica'
      },
      bio_disposicion_final: {
        path: 'bio-disposicion-final-residuos-particulares'
      },
      bio_residuos_especiales_nocompactables: {
        path: 'bio-residuos-especiales-no-compactables'
      },
      bio_residuos_construccion: {
        path: 'bio-residuos-construccion'
      },
      bio_residuos_eventos_especiales: {
        path: 'bio-eventos-especiales'
      },
      bio_asesoramiento_pagos: {
        path: 'bio-asesoramiento-pago'
      },
      bio_jardineria: {
        path: 'bio-jardineria'
      }
    }
  };
}
