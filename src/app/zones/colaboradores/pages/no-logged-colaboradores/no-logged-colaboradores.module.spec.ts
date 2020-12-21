import { NoLoggedColaboradoresModule } from './no-logged-colaboradores.module';

describe('NoLoggedColaboradoresModule', () => {
  let noLoggedColaboradoresModule: NoLoggedColaboradoresModule;

  beforeEach(() => {
    noLoggedColaboradoresModule = new NoLoggedColaboradoresModule();
  });

  it('should create an instance', () => {
    expect(noLoggedColaboradoresModule).toBeTruthy();
  });
});
