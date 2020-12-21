import { RepositoryTratamientoDatosModule } from './repository-tratamiento-datos.module';

describe('RepositoryTratamientoDatosModule', () => {
  let repositoryTratamientoDatosModule: RepositoryTratamientoDatosModule;

  beforeEach(() => {
    repositoryTratamientoDatosModule = new RepositoryTratamientoDatosModule();
  });

  it('should create an instance', () => {
    expect(repositoryTratamientoDatosModule).toBeTruthy();
  });
});
