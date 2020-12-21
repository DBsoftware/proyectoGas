import { BorderWithTitleModule } from './border-with-title.module';

describe('BorderWithTitleModule', () => {
  let borderWithTitleModule: BorderWithTitleModule;

  beforeEach(() => {
    borderWithTitleModule = new BorderWithTitleModule();
  });

  it('should create an instance', () => {
    expect(borderWithTitleModule).toBeTruthy();
  });
});
