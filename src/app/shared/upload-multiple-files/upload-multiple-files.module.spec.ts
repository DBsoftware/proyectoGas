import { UploadMultipleFilesModule } from './upload-multiple-files.module';

describe('UploadMultipleFilesModule', () => {
  let uploadMultipleFilesModule: UploadMultipleFilesModule;

  beforeEach(() => {
    uploadMultipleFilesModule = new UploadMultipleFilesModule();
  });

  it('should create an instance', () => {
    expect(uploadMultipleFilesModule).toBeTruthy();
  });
});
