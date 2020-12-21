import { LoginProveedoresModule } from './login-proveedores.module';

describe('LoginProveedoresModule', () => {
  let loginProveedoresModule: LoginProveedoresModule;

  beforeEach(() => {
    loginProveedoresModule = new LoginProveedoresModule();
  });

  it('should create an instance', () => {
    expect(loginProveedoresModule).toBeTruthy();
  });
});
