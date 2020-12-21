import { AdminLineaEticaModule } from './admin-linea-etica.module';

describe('AdminLineaEticaModule', () => {
  let adminLineaEticaModule: AdminLineaEticaModule;

  beforeEach(() => {
    adminLineaEticaModule = new AdminLineaEticaModule();
  });

  it('should create an instance', () => {
    expect(adminLineaEticaModule).toBeTruthy();
  });
});
