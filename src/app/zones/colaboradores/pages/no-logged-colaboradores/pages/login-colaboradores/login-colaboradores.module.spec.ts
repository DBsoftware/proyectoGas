import { LoginColaboradoresModule } from './login-colaboradores.module';

describe('LoginColaboradoresModule', () => {
  let loginColaboradoresModule: LoginColaboradoresModule;

  beforeEach(() => {
    loginColaboradoresModule = new LoginColaboradoresModule();
  });

  it('should create an instance', () => {
    expect(loginColaboradoresModule).toBeTruthy();
  });
});
