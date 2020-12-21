import { ConsultaFacturaClientesModule } from './consulta-factura-clientes.module';

describe('ConsultaFacturaClientesModule', () => {
  let consultaFacturaClientesModule: ConsultaFacturaClientesModule;

  beforeEach(() => {
    consultaFacturaClientesModule = new ConsultaFacturaClientesModule();
  });

  it('should create an instance', () => {
    expect(consultaFacturaClientesModule).toBeTruthy();
  });
});
