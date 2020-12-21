import { ColaboradoresModule } from './colaboradores.module';

describe('ColaboradoresModule', () => {
  let colaboradoresModule: ColaboradoresModule;

  beforeEach(() => {
    colaboradoresModule = new ColaboradoresModule();
  });

  it('should create an instance', () => {
    expect(colaboradoresModule).toBeTruthy();
  });
});
