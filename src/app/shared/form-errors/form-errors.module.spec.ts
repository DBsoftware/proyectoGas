import { FormErrorsModule } from './form-errors.module';

describe('FormErrorsModule', () => {
  let formErrorsModule: FormErrorsModule;

  beforeEach(() => {
    formErrorsModule = new FormErrorsModule();
  });

  it('should create an instance', () => {
    expect(formErrorsModule).toBeTruthy();
  });
});
