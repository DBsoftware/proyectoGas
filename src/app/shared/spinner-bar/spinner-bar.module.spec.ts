import { SpinnerBarModule } from './spinner-bar.module';

describe('SpinnerBarModule', () => {
  let spinnerBarModule: SpinnerBarModule;

  beforeEach(() => {
    spinnerBarModule = new SpinnerBarModule();
  });

  it('should create an instance', () => {
    expect(spinnerBarModule).toBeTruthy();
  });
});
