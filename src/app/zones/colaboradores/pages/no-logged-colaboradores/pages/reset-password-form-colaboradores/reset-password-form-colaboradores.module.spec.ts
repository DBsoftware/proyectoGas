import { ResetPasswordFormColaboradoresModule } from './reset-password-form-colaboradores.module';

describe('ResetPasswordFormColaboradoresModule', () => {
  let resetPasswordFormColaboradoresModule: ResetPasswordFormColaboradoresModule;

  beforeEach(() => {
    resetPasswordFormColaboradoresModule = new ResetPasswordFormColaboradoresModule();
  });

  it('should create an instance', () => {
    expect(resetPasswordFormColaboradoresModule).toBeTruthy();
  });
});
