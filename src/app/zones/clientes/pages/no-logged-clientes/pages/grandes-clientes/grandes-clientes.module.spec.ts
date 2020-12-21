import { GrandesClientesModule } from './grandes-clientes.module';

describe('GrandesClientesModule', () => {
  let grandesClientesModule: GrandesClientesModule;

  beforeEach(() => {
    grandesClientesModule = new GrandesClientesModule();
  });

  it('should create an instance', () => {
    expect(grandesClientesModule).toBeTruthy();
  });
});
