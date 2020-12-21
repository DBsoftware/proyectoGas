import { BioJardineriaClientesModule } from './bio-jardineria-clientes.module';

describe('BioJardineriaClientesModule', () => {
  let bioJardineriaClientesModule: BioJardineriaClientesModule;

  beforeEach(() => {
    bioJardineriaClientesModule = new BioJardineriaClientesModule();
  });

  it('should create an instance', () => {
    expect(bioJardineriaClientesModule).toBeTruthy();
  });
});
