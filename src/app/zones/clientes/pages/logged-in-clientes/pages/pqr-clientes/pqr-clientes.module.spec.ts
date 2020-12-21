import { PqrClientesModule } from './pqr-clientes.module';

describe('PqrClientesModule', () => {
  let pqrClientesModule: PqrClientesModule;

  beforeEach(() => {
    pqrClientesModule = new PqrClientesModule();
  });

  it('should create an instance', () => {
    expect(pqrClientesModule).toBeTruthy();
  });
});
