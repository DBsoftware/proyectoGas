import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileClientesComponent } from './profile-clientes.component';

describe('ProfileClientesComponent', () => {
  let component: ProfileClientesComponent;
  let fixture: ComponentFixture<ProfileClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
