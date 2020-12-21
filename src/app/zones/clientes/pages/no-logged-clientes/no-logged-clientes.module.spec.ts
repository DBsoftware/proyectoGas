import { NoLoggedClientesModule } from './no-logged-clientes.module';

describe('NoLoggedClientesModule', () => {
  let noLoggedModule: NoLoggedClientesModule;

  beforeEach(() => {
    noLoggedModule = new NoLoggedClientesModule();
  });

  it('should create an instance', () => {
    expect(noLoggedModule).toBeTruthy();
  });
});
