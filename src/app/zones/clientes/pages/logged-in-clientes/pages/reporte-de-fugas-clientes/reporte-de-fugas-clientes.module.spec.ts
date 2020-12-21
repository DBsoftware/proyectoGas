import { ReporteDeFugasClientesModule } from './reporte-de-fugas-clientes.module';

describe('ReporteDeFugasClientesModule', () => {
  let reporteDeFugasClientesModule: ReporteDeFugasClientesModule;

  beforeEach(() => {
    reporteDeFugasClientesModule = new ReporteDeFugasClientesModule();
  });

  it('should create an instance', () => {
    expect(reporteDeFugasClientesModule).toBeTruthy();
  });
});
