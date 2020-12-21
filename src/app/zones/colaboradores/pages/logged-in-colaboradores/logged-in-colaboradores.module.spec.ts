import { LoggedInColaboradoresModule } from './logged-in-colaboradores.module';

describe('LoggedInColaboradoresModule', () => {
  let loggedInColaboradoresModule: LoggedInColaboradoresModule;

  beforeEach(() => {
    loggedInColaboradoresModule = new LoggedInColaboradoresModule();
  });

  it('should create an instance', () => {
    expect(loggedInColaboradoresModule).toBeTruthy();
  });
});
