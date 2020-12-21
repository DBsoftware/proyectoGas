import { BioFrecuenciaRecoleccionBarridoClientesModule } from './bio-frecuencia-recoleccion-barrido-clientes.module';

describe('BioFrecuenciaRecoleccionBarridoClientesModule', () => {
  let bioFrecuenciaRecoleccionBarridoClientesModule: BioFrecuenciaRecoleccionBarridoClientesModule;

  beforeEach(() => {
    bioFrecuenciaRecoleccionBarridoClientesModule = new BioFrecuenciaRecoleccionBarridoClientesModule();
  });

  it('should create an instance', () => {
    expect(bioFrecuenciaRecoleccionBarridoClientesModule).toBeTruthy();
  });
});
