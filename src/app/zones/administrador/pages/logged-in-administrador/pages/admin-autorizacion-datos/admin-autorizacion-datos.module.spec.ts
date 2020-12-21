import { AdminAutorizacionDatosModule } from './admin-autorizacion-datos.module';

describe('AdminAutorizacionDatosModule', () => {
  let adminAutorizacionDatosModule: AdminAutorizacionDatosModule;

  beforeEach(() => {
    adminAutorizacionDatosModule = new AdminAutorizacionDatosModule();
  });

  it('should create an instance', () => {
    expect(adminAutorizacionDatosModule).toBeTruthy();
  });
});
