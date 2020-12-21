import { CentroAtencionMapClientesModule } from './centro-atencion-map-clientes.module';

describe('CentroAtencionMapClientesModule', () => {
  let centroAtencionMapClientesModule: CentroAtencionMapClientesModule;

  beforeEach(() => {
    centroAtencionMapClientesModule = new CentroAtencionMapClientesModule();
  });

  it('should create an instance', () => {
    expect(centroAtencionMapClientesModule).toBeTruthy();
  });
});
