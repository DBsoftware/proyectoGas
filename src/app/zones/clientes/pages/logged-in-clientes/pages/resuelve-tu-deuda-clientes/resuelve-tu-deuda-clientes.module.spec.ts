import { ResuelveTuDeudaClientesModule } from './resuelve-tu-deuda-clientes.module';

describe('ResuelveTuDeudaClientesModule', () => {
  let resuelveTuDudaClientesModule: ResuelveTuDeudaClientesModule;

  beforeEach(() => {
    resuelveTuDudaClientesModule = new ResuelveTuDeudaClientesModule();
  });

  it('should create an instance', () => {
    expect(resuelveTuDudaClientesModule).toBeTruthy();
  });
});
