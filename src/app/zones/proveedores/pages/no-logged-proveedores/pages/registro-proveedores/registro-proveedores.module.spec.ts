import { RegistroProveedoresModule } from './registro-proveedores.module';

describe('RegistroProveedoresModule', () => {
  let registroProveedoresModule: RegistroProveedoresModule;

  beforeEach(() => {
    registroProveedoresModule = new RegistroProveedoresModule();
  });

  it('should create an instance', () => {
    expect(registroProveedoresModule).toBeTruthy();
  });
});
