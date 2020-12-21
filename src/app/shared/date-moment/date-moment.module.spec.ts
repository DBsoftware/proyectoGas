import { DateMomentModule } from './date-moment.module';

describe('DateMomentModule', () => {
  let dateMomentModule: DateMomentModule;

  beforeEach(() => {
    dateMomentModule = new DateMomentModule();
  });

  it('should create an instance', () => {
    expect(dateMomentModule).toBeTruthy();
  });
});
