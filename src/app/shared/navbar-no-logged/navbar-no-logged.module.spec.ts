import { NavbarNoLoggedModule } from './navbar-no-logged.module';

describe('NavbarNoLoggedModule', () => {
  let navbarNoLoggedModule: NavbarNoLoggedModule;

  beforeEach(() => {
    navbarNoLoggedModule = new NavbarNoLoggedModule();
  });

  it('should create an instance', () => {
    expect(navbarNoLoggedModule).toBeTruthy();
  });
});
