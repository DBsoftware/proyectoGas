export class RoutingPathAdmin {

  public static ADMINISTRAR_ROUTING = {
        pages: {
          logged_in: {
            path: 'usuario',
          },
          no_logged: {
            path: ''
          }
        }
  };

  public static NO_LOGGED_IN_ROUTING = {
    pages: {
      login: {
        path: 'iniciar-sesion',
      },
      registro: {
        path: 'registro'
      },
      reset_password: {
        path: 'cambiar-contrasena'
      }
    }
  };
  public static  LOGGED_IN_ROUTING = {
    pages: {
      tratamiento: {
        path: 'tratamiento-de-datos-personales',
        pages: {
          form_datos_personales: {
            path: 'edicion-politica-de-datos-personales'
          },
        },
      },
      autorizacion: {
        path: 'autorizacion-tratamiento-datos-personales',
        pages: {
          form_datos_autorizacion: {
            path: 'edicion-politica-de-datos-personales'
          }
        }
      },
      convocatorias: {
        path: 'admin-convocatoria-desempeño'
      },
      convocatorias_form: {
        path: 'crear-convocatoria',
      },
      convocatorias_editar_path: {
        path: 'editar',
      },
      convocatorias_editar: {
        path: 'editar/:id',
      },
      account_proveedor: {
        path: 'administrar-proveedores'
      },
      evaluacion_desempeno: {
        path: 'admin-evaluacion-desempeño',
      },
      evaluacion_desempeno_form: {
        path: 'crear-evaluacion-desempeño'
      },
      evaluacion_desempeno_edit: {
        path: 'editar-evaluacion-desempeno'
      },
      evaluacion_desempeno_edit_path: {
        path: 'editar-evaluacion-desempeno/:id'
      }
    },
    linea_etica: {
      path: 'admin-linea-etica'
    }
  };
}
