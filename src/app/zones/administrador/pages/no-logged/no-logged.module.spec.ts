import { NoLoggedModule } from './no-logged.module';

describe('NoLoggedModule', () => {
  let noLoggedModule: NoLoggedModule;

  beforeEach(() => {
    noLoggedModule = new NoLoggedModule();
  });

  it('should create an instance', () => {
    expect(noLoggedModule).toBeTruthy();
  });
});
