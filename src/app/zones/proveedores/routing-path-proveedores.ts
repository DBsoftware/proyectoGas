export class RoutingPathProveedores {
  public static PROVEEDORES_ROUTING = {
    pages: {
      no_logged: {
        path: '',
      },
      logged_in: {
        path: 'usuario',
      }
    }
  };
  public static NO_LOGGED_IN_ROUTING = {
    pages: {
      active_account: {
        path: ':userId/activar/:token'
      },
      forget_password_form: {
        path: ':userId/restablecer-contrasena/:token'
      },
      forget_password: {
        path: 'recuperar-contraseña'
      },
      registrer: {
        path: 'registrar'
      },
      iniciar_sesion: {
        path: 'iniciar-sesion'
      }
    }
  };
    public static LOGGED_IN_ROUTING = {
      pages: {
        firmas_instaladoras: {
          path: 'firmas-instaladoras'
        },
        certificados_retencion: {
          path: 'certificados-retencion'
        },
        consulta_estado: {
          path: 'consulta-estado-factura'
        },
        convocatoria_proveedores: {
          path: 'convocatoria'
        },
        evaluacion_desempeno: {
          path: 'evaluacion-desempeno'
        }
      }
    };
  }
