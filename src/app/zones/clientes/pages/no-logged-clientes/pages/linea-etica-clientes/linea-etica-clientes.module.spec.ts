import { LineaEticaClientesModule } from './linea-etica-clientes.module';

describe('LineaEticaClientesModule', () => {
  let lineaEticaClientesModule: LineaEticaClientesModule;

  beforeEach(() => {
    lineaEticaClientesModule = new LineaEticaClientesModule();
  });

  it('should create an instance', () => {
    expect(lineaEticaClientesModule).toBeTruthy();
  });
});
