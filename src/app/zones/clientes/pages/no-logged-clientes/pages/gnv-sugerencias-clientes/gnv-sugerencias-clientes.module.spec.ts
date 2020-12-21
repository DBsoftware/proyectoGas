import { GnvSugerenciasClientesModule } from './gnv-sugerencias-clientes.module';

describe('GnvSugerenciasClientesModule', () => {
  let gnvSugerenciasClientesModule: GnvSugerenciasClientesModule;

  beforeEach(() => {
    gnvSugerenciasClientesModule = new GnvSugerenciasClientesModule();
  });

  it('should create an instance', () => {
    expect(gnvSugerenciasClientesModule).toBeTruthy();
  });
});
