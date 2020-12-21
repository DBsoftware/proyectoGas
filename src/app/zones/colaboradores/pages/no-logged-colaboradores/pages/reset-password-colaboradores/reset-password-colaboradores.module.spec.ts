import { ResetPasswordColaboradoresModule } from './reset-password-colaboradores.module';

describe('ResetPasswordColaboradoresModule', () => {
  let resetPasswordColaboradoresModule: ResetPasswordColaboradoresModule;

  beforeEach(() => {
    resetPasswordColaboradoresModule = new ResetPasswordColaboradoresModule();
  });

  it('should create an instance', () => {
    expect(resetPasswordColaboradoresModule).toBeTruthy();
  });
});
