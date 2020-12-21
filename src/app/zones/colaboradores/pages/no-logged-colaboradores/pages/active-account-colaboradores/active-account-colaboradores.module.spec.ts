import { ActiveAccountColaboradoresModule } from './active-account-colaboradores.module';

describe('ActiveAccountColaboradoresModule', () => {
  let activeAccountColaboradoresModule: ActiveAccountColaboradoresModule;

  beforeEach(() => {
    activeAccountColaboradoresModule = new ActiveAccountColaboradoresModule();
  });

  it('should create an instance', () => {
    expect(activeAccountColaboradoresModule).toBeTruthy();
  });
});
