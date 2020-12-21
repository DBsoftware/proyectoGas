import { RegistroColaboradorModule } from './registro-colaborador.module';

describe('RegistroColaboradorModule', () => {
  let registroColaboradorModule: RegistroColaboradorModule;

  beforeEach(() => {
    registroColaboradorModule = new RegistroColaboradorModule();
  });

  it('should create an instance', () => {
    expect(registroColaboradorModule).toBeTruthy();
  });
});
