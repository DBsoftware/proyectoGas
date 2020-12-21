import { VentasSolicitudExpansionClientesModule } from './ventas-solicitud-expansion-clientes.module';

describe('VentasSolicitudExpansionClientesModule', () => {
  let ventasSolicitudExpansionClientesModule: VentasSolicitudExpansionClientesModule;

  beforeEach(() => {
    ventasSolicitudExpansionClientesModule = new VentasSolicitudExpansionClientesModule();
  });

  it('should create an instance', () => {
    expect(ventasSolicitudExpansionClientesModule).toBeTruthy();
  });
});
