import { DialogConfirmModule } from './dialog-confirm.module';

describe('DialogConfirmModule', () => {
  let dialogConfirmModule: DialogConfirmModule;

  beforeEach(() => {
    dialogConfirmModule = new DialogConfirmModule();
  });

  it('should create an instance', () => {
    expect(dialogConfirmModule).toBeTruthy();
  });
});
