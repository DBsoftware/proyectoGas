import { FirmasInstaladorasProveedoresModule } from './firmas-instaladoras-proveedores.module';

describe('FirmasInstaladorasProveedoresModule', () => {
  let firmasInstaladorasProveedoresModule: FirmasInstaladorasProveedoresModule;

  beforeEach(() => {
    firmasInstaladorasProveedoresModule = new FirmasInstaladorasProveedoresModule();
  });

  it('should create an instance', () => {
    expect(firmasInstaladorasProveedoresModule).toBeTruthy();
  });
});
