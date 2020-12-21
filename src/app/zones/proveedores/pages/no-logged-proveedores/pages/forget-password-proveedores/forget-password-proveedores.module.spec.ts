import { ForgetPasswordProveedoresModule } from './forget-password-proveedores.module';

describe('ForgetPasswordProveedoresModule', () => {
  let forgetPasswordProveedoresModule: ForgetPasswordProveedoresModule;

  beforeEach(() => {
    forgetPasswordProveedoresModule = new ForgetPasswordProveedoresModule();
  });

  it('should create an instance', () => {
    expect(forgetPasswordProveedoresModule).toBeTruthy();
  });
});
