import { UppercaseTextModule } from './uppercase-text.module';

describe('UppercaseTextModule', () => {
  let uppercaseTextModule: UppercaseTextModule;

  beforeEach(() => {
    uppercaseTextModule = new UppercaseTextModule();
  });

  it('should create an instance', () => {
    expect(uppercaseTextModule).toBeTruthy();
  });
});
