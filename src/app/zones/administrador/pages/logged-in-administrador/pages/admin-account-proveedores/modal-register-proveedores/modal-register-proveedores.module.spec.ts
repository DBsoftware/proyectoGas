import { ModalRegisterProveedoresModule } from './modal-register-proveedores.module';

describe('ModalRegisterProveedoresModule', () => {
  let modalRegisterProveedoresModule: ModalRegisterProveedoresModule;

  beforeEach(() => {
    modalRegisterProveedoresModule = new ModalRegisterProveedoresModule();
  });

  it('should create an instance', () => {
    expect(modalRegisterProveedoresModule).toBeTruthy();
  });
});
