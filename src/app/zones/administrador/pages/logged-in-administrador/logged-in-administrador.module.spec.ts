import { LoggedInAdministradorModule } from './logged-in-administrador.module';

describe('LoggedInAdministradorModule', () => {
  let loggedInModule: LoggedInAdministradorModule;

  beforeEach(() => {
    loggedInModule = new LoggedInAdministradorModule();
  });

  it('should create an instance', () => {
    expect(loggedInModule).toBeTruthy();
  });
});
