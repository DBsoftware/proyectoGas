import { VentasSolicitudPostventaClientesModule } from './ventas-solicitud-postventa-clientes.module';

describe('VentasSolicitudPostventaClientesModule', () => {
  let ventasSolicitudPostventaClientesModule: VentasSolicitudPostventaClientesModule;

  beforeEach(() => {
    ventasSolicitudPostventaClientesModule = new VentasSolicitudPostventaClientesModule();
  });

  it('should create an instance', () => {
    expect(ventasSolicitudPostventaClientesModule).toBeTruthy();
  });
});
