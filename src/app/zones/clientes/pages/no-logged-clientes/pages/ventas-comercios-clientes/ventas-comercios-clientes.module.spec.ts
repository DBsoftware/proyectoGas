import { VentasComerciosClientesModule } from './ventas-comercios-clientes.module';

describe('VentasComerciosClientesModule', () => {
  let ventasComerciosClientesModule: VentasComerciosClientesModule;

  beforeEach(() => {
    ventasComerciosClientesModule = new VentasComerciosClientesModule();
  });

  it('should create an instance', () => {
    expect(ventasComerciosClientesModule).toBeTruthy();
  });
});
