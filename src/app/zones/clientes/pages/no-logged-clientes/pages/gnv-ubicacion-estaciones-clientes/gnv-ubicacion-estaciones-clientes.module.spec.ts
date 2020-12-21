import { GnvUbicacionEstacionesClientesModule } from './gnv-ubicacion-estaciones-clientes.module';

describe('GnvUbicacionEstacionesClientesModule', () => {
  let gnvUbicacionEstacionesClientesModule: GnvUbicacionEstacionesClientesModule;

  beforeEach(() => {
    gnvUbicacionEstacionesClientesModule = new GnvUbicacionEstacionesClientesModule();
  });

  it('should create an instance', () => {
    expect(gnvUbicacionEstacionesClientesModule).toBeTruthy();
  });
});
