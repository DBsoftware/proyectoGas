import { BioDisposicionResiduosParticularesClientesModule } from './bio-disposicion-residuos-particulares-clientes.module';

describe('BioDisposicionResiduosParticularesClientesModule', () => {
  let bioDisposicionResiduosParticularesModule: BioDisposicionResiduosParticularesClientesModule;

  beforeEach(() => {
    bioDisposicionResiduosParticularesModule = new BioDisposicionResiduosParticularesClientesModule();
  });

  it('should create an instance', () => {
    expect(bioDisposicionResiduosParticularesModule).toBeTruthy();
  });
});
