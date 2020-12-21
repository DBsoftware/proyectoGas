import { BioAsesoramientoPagoModule } from './bio-asesoramiento-pago.module';

describe('BioAsesoramientoPagoModule', () => {
  let bioAsesoramientoPagoModule: BioAsesoramientoPagoModule;

  beforeEach(() => {
    bioAsesoramientoPagoModule = new BioAsesoramientoPagoModule();
  });

  it('should create an instance', () => {
    expect(bioAsesoramientoPagoModule).toBeTruthy();
  });
});
