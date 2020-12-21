import { FormularioContactoColaboradoresModule } from './formulario-contacto-colaboradores.module';

describe('FormularioContactoColaboradoresModule', () => {
  let formularioContactoColaboradoresModule: FormularioContactoColaboradoresModule;

  beforeEach(() => {
    formularioContactoColaboradoresModule = new FormularioContactoColaboradoresModule();
  });

  it('should create an instance', () => {
    expect(formularioContactoColaboradoresModule).toBeTruthy();
  });
});
