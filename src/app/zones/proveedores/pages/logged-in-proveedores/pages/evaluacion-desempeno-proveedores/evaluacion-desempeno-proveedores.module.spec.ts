import { EvaluacionDesempenoProveedoresModule } from './evaluacion-desempeno-proveedores.module';

describe('EvaluacionDesempenoProveedoresModule', () => {
  let evaluacionDesempenoProveedoresModule: EvaluacionDesempenoProveedoresModule;

  beforeEach(() => {
    evaluacionDesempenoProveedoresModule = new EvaluacionDesempenoProveedoresModule();
  });

  it('should create an instance', () => {
    expect(evaluacionDesempenoProveedoresModule).toBeTruthy();
  });
});
