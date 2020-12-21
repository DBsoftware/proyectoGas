import { ActiveAccountClientesModule } from './active-account-clientes.module';

describe('ActiveAccountClientesModule', () => {
  let activeAccountModule: ActiveAccountClientesModule;

  beforeEach(() => {
    activeAccountModule = new ActiveAccountClientesModule();
  });

  it('should create an instance', () => {
    expect(activeAccountModule).toBeTruthy();
  });
});
