import { BioResiduosEspecialesNocompactablesClientesModule } from './bio-residuos-especiales-nocompactables-clientes.module';

describe('BioResiduosEspecialesNocompactablesClientesModule', () => {
  let bioResiduosEspecialesNocompactablesClientesModule: BioResiduosEspecialesNocompactablesClientesModule;

  beforeEach(() => {
    bioResiduosEspecialesNocompactablesClientesModule = new BioResiduosEspecialesNocompactablesClientesModule();
  });

  it('should create an instance', () => {
    expect(bioResiduosEspecialesNocompactablesClientesModule).toBeTruthy();
  });
});
