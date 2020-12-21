import { VentasConstructurasGrandesClientesModule } from './ventas-constructuras-grandes-clientes.module';

describe('VentasConstructurasGrandesClientesModule', () => {
  let ventasConstructurasGrandesClientesModule: VentasConstructurasGrandesClientesModule;

  beforeEach(() => {
    ventasConstructurasGrandesClientesModule = new VentasConstructurasGrandesClientesModule();
  });

  it('should create an instance', () => {
    expect(ventasConstructurasGrandesClientesModule).toBeTruthy();
  });
});
