import { ConsultaEstadoFacturaModule } from './consulta-estado-factura.module';

describe('ConsultaEstadoFacturaModule', () => {
  let consultaEstadoFacturaModule: ConsultaEstadoFacturaModule;

  beforeEach(() => {
    consultaEstadoFacturaModule = new ConsultaEstadoFacturaModule();
  });

  it('should create an instance', () => {
    expect(consultaEstadoFacturaModule).toBeTruthy();
  });
});
