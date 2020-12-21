import { ConsultasFechasVencimientoClientesModule } from './consultas-fechas-vencimiento-clientes.module';

describe('ConsultasFechasVencimientoClientesModule', () => {
  let consultasFechasVencimientoClientesModule: ConsultasFechasVencimientoClientesModule;

  beforeEach(() => {
    consultasFechasVencimientoClientesModule = new ConsultasFechasVencimientoClientesModule();
  });

  it('should create an instance', () => {
    expect(consultasFechasVencimientoClientesModule).toBeTruthy();
  });
});
