import { VentasHogaresClientesModule } from './ventas-hogares-clientes.module';

describe('VentasHogaresClientesModule', () => {
  let ventasHogaresClientesModule: VentasHogaresClientesModule;

  beforeEach(() => {
    ventasHogaresClientesModule = new VentasHogaresClientesModule();
  });

  it('should create an instance', () => {
    expect(ventasHogaresClientesModule).toBeTruthy();
  });
});
