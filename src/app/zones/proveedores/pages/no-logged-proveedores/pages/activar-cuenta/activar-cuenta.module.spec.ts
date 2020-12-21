import { ActivarCuentaModule } from './activar-cuenta.module';

describe('ActivarCuentaModule', () => {
  let activarCuentaModule: ActivarCuentaModule;

  beforeEach(() => {
    activarCuentaModule = new ActivarCuentaModule();
  });

  it('should create an instance', () => {
    expect(activarCuentaModule).toBeTruthy();
  });
});
