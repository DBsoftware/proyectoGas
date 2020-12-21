import { BioEventosEspacialesClientesModule } from './bio-eventos-espaciales-clientes.module';

describe('BioEventosEspacialesClientesModule', () => {
  let bioEventosEspacialesClientesModule: BioEventosEspacialesClientesModule;

  beforeEach(() => {
    bioEventosEspacialesClientesModule = new BioEventosEspacialesClientesModule();
  });

  it('should create an instance', () => {
    expect(bioEventosEspacialesClientesModule).toBeTruthy();
  });
});
