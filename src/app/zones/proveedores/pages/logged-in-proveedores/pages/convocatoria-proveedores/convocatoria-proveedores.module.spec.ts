import { ConvocatoriaProveedoresModule } from './convocatoria-proveedores.module';

describe('ConvocatoriaProveedoresModule', () => {
  let convocatoriaProveedoresModule: ConvocatoriaProveedoresModule;

  beforeEach(() => {
    convocatoriaProveedoresModule = new ConvocatoriaProveedoresModule();
  });

  it('should create an instance', () => {
    expect(convocatoriaProveedoresModule).toBeTruthy();
  });
});
