import { NoLoggedProveedoresModule } from './no-logged-proveedores.module';

describe('NoLoggedProveedoresModule', () => {
  let noLoggedProveedoresModule: NoLoggedProveedoresModule;

  beforeEach(() => {
    noLoggedProveedoresModule = new NoLoggedProveedoresModule();
  });

  it('should create an instance', () => {
    expect(noLoggedProveedoresModule).toBeTruthy();
  });
});
