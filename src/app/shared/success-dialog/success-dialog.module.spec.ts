import { SuccessDialogModule } from './success-dialog.module';

describe('SuccessDialogModule', () => {
  let successDialogModule: SuccessDialogModule;

  beforeEach(() => {
    successDialogModule = new SuccessDialogModule();
  });

  it('should create an instance', () => {
    expect(successDialogModule).toBeTruthy();
  });
});
