import { EstadoCuentaFinanciacionClientesModule } from './estado-cuenta-financiacion-clientes.module';

describe('EstadoCuentaFinanciacionClientesModule', () => {
  let estadoCuentaFinanciacionClientesModule: EstadoCuentaFinanciacionClientesModule;

  beforeEach(() => {
    estadoCuentaFinanciacionClientesModule = new EstadoCuentaFinanciacionClientesModule();
  });

  it('should create an instance', () => {
    expect(estadoCuentaFinanciacionClientesModule).toBeTruthy();
  });
});
