import { CertificadosRetencionModule } from './certificados-retencion.module';

describe('CertificadosRetencionModule', () => {
  let certificadosRetencionModule: CertificadosRetencionModule;

  beforeEach(() => {
    certificadosRetencionModule = new CertificadosRetencionModule();
  });

  it('should create an instance', () => {
    expect(certificadosRetencionModule).toBeTruthy();
  });
});
