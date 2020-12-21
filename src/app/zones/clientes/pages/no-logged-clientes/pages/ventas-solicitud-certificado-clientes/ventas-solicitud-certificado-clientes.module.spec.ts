import { VentasSolicitudCertificadoClientesModule } from './ventas-solicitud-certificado-clientes.module';

describe('VentasSolicitudCertificadoClientesModule', () => {
  let ventasSolicitudCertificadoClientesModule: VentasSolicitudCertificadoClientesModule;

  beforeEach(() => {
    ventasSolicitudCertificadoClientesModule = new VentasSolicitudCertificadoClientesModule();
  });

  it('should create an instance', () => {
    expect(ventasSolicitudCertificadoClientesModule).toBeTruthy();
  });
});
