import { ForgetPasswordClientesModule } from './forget-password-clientes.module';

describe('ForgetPasswordClientesModule', () => {
  let forgetPasswordClientesModule: ForgetPasswordClientesModule;

  beforeEach(() => {
    forgetPasswordClientesModule = new ForgetPasswordClientesModule();
  });

  it('should create an instance', () => {
    expect(forgetPasswordClientesModule).toBeTruthy();
  });
});
