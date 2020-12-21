import { EnvioFacturaMedioCorreoClientesModule } from './envio-factura-medio-correo-clientes.module';

describe('EnvioFacturaMedioCorreoClientesModule', () => {
  let envioFacturaMedioCorreoClientesModule: EnvioFacturaMedioCorreoClientesModule;

  beforeEach(() => {
    envioFacturaMedioCorreoClientesModule = new EnvioFacturaMedioCorreoClientesModule();
  });

  it('should create an instance', () => {
    expect(envioFacturaMedioCorreoClientesModule).toBeTruthy();
  });
});
