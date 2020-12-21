export class RoutingPathColaboradores {
  public static COLABORADORES_ROUTING = {
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
      formulario_colaboradores: {
        path: 'formulario-contacto'
      }
    }
  };
  public  static NO_LOGGED_IN_ROUTING = {
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
    }
  };
}
