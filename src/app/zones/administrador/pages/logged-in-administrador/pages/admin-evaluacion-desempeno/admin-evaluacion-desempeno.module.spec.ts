import { AdminEvaluacionDesempenoModule } from './admin-evaluacion-desempeno.module';

describe('AdminEvaluacionDesempenoModule', () => {
  let adminEvaluacionDesempenoModule: AdminEvaluacionDesempenoModule;

  beforeEach(() => {
    adminEvaluacionDesempenoModule = new AdminEvaluacionDesempenoModule();
  });

  it('should create an instance', () => {
    expect(adminEvaluacionDesempenoModule).toBeTruthy();
  });
});
