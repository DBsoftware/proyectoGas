import { ConsultaFechaEntregaFacturaClientesModule } from './consulta-fecha-entrega-factura-clientes.module';

describe('ConsultaFechaEntregaFacturaClientesModule', () => {
  let consultaFechaEntregaFacturaClientesModule: ConsultaFechaEntregaFacturaClientesModule;

  beforeEach(() => {
    consultaFechaEntregaFacturaClientesModule = new ConsultaFechaEntregaFacturaClientesModule();
  });

  it('should create an instance', () => {
    expect(consultaFechaEntregaFacturaClientesModule).toBeTruthy();
  });
});
