import { InfoDialogModule } from './info-dialog.module';

describe('InfoDialogModule', () => {
  let infoDialogModule: InfoDialogModule;

  beforeEach(() => {
    infoDialogModule = new InfoDialogModule();
  });

  it('should create an instance', () => {
    expect(infoDialogModule).toBeTruthy();
  });
});
