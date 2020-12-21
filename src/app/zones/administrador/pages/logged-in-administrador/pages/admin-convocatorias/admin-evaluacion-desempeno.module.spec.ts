import { AdminConvocatoriasModule } from './admin-convocatorias.module';

describe('AdminConvocatoriasModule', () => {
  let adminEvaluacionDesempenoModule: AdminConvocatoriasModule;

  beforeEach(() => {
    adminEvaluacionDesempenoModule = new AdminConvocatoriasModule();
  });

  it('should create an instance', () => {
    expect(adminEvaluacionDesempenoModule).toBeTruthy();
  });
});
