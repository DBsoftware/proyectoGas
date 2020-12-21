import { AutorizacionTratamientoModule } from './autorizacion-tratamiento.module';

describe('AutorizacionTratamientoModule', () => {
  let autorizacionTratamientoModule: AutorizacionTratamientoModule;

  beforeEach(() => {
    autorizacionTratamientoModule = new AutorizacionTratamientoModule();
  });

  it('should create an instance', () => {
    expect(autorizacionTratamientoModule).toBeTruthy();
  });
});
