import { IniciarSesionClientesModule } from './iniciar-sesion-clientes.module';

describe('IniciarSesionClientesModule', () => {
  let iniciarSesionClientesModule: IniciarSesionClientesModule;

  beforeEach(() => {
    iniciarSesionClientesModule = new IniciarSesionClientesModule();
  });

  it('should create an instance', () => {
    expect(iniciarSesionClientesModule).toBeTruthy();
  });
});
