import { RecaudadoresClientesModule } from './recaudadores-clientes.module';

describe('RecaudadoresClientesModule', () => {
  let recaudadoresModule: RecaudadoresClientesModule;

  beforeEach(() => {
    recaudadoresModule = new RecaudadoresClientesModule();
  });

  it('should create an instance', () => {
    expect(recaudadoresModule).toBeTruthy();
  });
});
