import { FormAutorizacionDatosModule } from './form-autorizacion-datos.module';

describe('FormAutorizacionDatosModule', () => {
  let formAutorizacionDatosModule: FormAutorizacionDatosModule;

  beforeEach(() => {
    formAutorizacionDatosModule = new FormAutorizacionDatosModule();
  });

  it('should create an instance', () => {
    expect(formAutorizacionDatosModule).toBeTruthy();
  });
});
