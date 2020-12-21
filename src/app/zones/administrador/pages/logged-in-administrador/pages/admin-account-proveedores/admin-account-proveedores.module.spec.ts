import { AdminAccountProveedoresModule } from './admin-account-proveedores.module';

describe('AdminAccountProveedoresModule', () => {
  let adminAccountProveedoresModule: AdminAccountProveedoresModule;

  beforeEach(() => {
    adminAccountProveedoresModule = new AdminAccountProveedoresModule();
  });

  it('should create an instance', () => {
    expect(adminAccountProveedoresModule).toBeTruthy();
  });
});
