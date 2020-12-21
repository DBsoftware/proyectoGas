import { PdfViewerModule } from './pdf-viewer.module';

describe('PdfViewerModule', () => {
  let pdfViewerModule: PdfViewerModule;

  beforeEach(() => {
    pdfViewerModule = new PdfViewerModule();
  });

  it('should create an instance', () => {
    expect(pdfViewerModule).toBeTruthy();
  });
});
