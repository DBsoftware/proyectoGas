import { LoggedInProveedoresModule } from './logged-in-proveedores.module';

describe('LoggedInProveedoresModule', () => {
  let loggedInProveedoresModule: LoggedInProveedoresModule;

  beforeEach(() => {
    loggedInProveedoresModule = new LoggedInProveedoresModule();
  });

  it('should create an instance', () => {
    expect(loggedInProveedoresModule).toBeTruthy();
  });
});
