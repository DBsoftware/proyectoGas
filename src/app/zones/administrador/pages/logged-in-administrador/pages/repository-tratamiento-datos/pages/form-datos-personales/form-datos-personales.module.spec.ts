import { FormDatosPersonalesModule } from './form-datos-personales.module';

describe('FormDatosPersonalesModule', () => {
  let formDatosPersonalesModule: FormDatosPersonalesModule;

  beforeEach(() => {
    formDatosPersonalesModule = new FormDatosPersonalesModule();
  });

  it('should create an instance', () => {
    expect(formDatosPersonalesModule).toBeTruthy();
  });
});
