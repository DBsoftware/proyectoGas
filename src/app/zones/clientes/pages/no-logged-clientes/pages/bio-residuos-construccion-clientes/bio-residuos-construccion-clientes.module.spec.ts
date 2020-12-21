import { BioResiduosConstruccionClientesModule } from './bio-residuos-construccion-clientes.module';

describe('BioResiduosConstruccionClientesModule', () => {
  let bioResiduosConstruccionClientesModule: BioResiduosConstruccionClientesModule;

  beforeEach(() => {
    bioResiduosConstruccionClientesModule = new BioResiduosConstruccionClientesModule();
  });

  it('should create an instance', () => {
    expect(bioResiduosConstruccionClientesModule).toBeTruthy();
  });
});
