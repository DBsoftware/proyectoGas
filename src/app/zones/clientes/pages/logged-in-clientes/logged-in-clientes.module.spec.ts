import { LoggedInClientesModule } from './logged-in-clientes.module';

describe('LoggedInClientesModule', () => {
  let loggedInClientesModule: LoggedInClientesModule;

  beforeEach(() => {
    loggedInClientesModule = new LoggedInClientesModule();
  });

  it('should create an instance', () => {
    expect(loggedInClientesModule).toBeTruthy();
  });
});
