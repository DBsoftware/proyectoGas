import { ProfileClientesModule } from './profile-clientes.module';

describe('ProfileClientesModule', () => {
  let profileClientesModule: ProfileClientesModule;

  beforeEach(() => {
    profileClientesModule = new ProfileClientesModule();
  });

  it('should create an instance', () => {
    expect(profileClientesModule).toBeTruthy();
  });
});
