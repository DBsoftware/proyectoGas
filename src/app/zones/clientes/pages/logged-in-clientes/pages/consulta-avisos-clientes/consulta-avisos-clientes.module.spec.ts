import { ConsultaAvisosClientesModule } from './consulta-avisos-clientes.module';

describe('ConsultaAvisosClientesModule', () => {
  let consultaAvisosClientesModule: ConsultaAvisosClientesModule;

  beforeEach(() => {
    consultaAvisosClientesModule = new ConsultaAvisosClientesModule();
  });

  it('should create an instance', () => {
    expect(consultaAvisosClientesModule).toBeTruthy();
  });
});
