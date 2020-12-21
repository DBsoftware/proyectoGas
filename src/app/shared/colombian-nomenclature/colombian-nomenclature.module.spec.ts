import { ColombianNomenclatureModule } from './colombian-nomenclature.module';

describe('ColombianNomenclatureModule', () => {
  let colombianNomenclatureModule: ColombianNomenclatureModule;

  beforeEach(() => {
    colombianNomenclatureModule = new ColombianNomenclatureModule();
  });

  it('should create an instance', () => {
    expect(colombianNomenclatureModule).toBeTruthy();
  });
});
