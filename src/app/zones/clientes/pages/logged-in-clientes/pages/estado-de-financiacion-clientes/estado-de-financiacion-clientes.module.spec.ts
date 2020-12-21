import { EstadoDeFinanciacionClientesModule } from './estado-de-financiacion-clientes.module';

describe('EstadoDeFinanciacionClientesModule', () => {
  let estadoDeFinanciacionClientesModule: EstadoDeFinanciacionClientesModule;

  beforeEach(() => {
    estadoDeFinanciacionClientesModule = new EstadoDeFinanciacionClientesModule();
  });

  it('should create an instance', () => {
    expect(estadoDeFinanciacionClientesModule).toBeTruthy();
  });
});
