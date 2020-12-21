import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryTratamientoDatosComponent } from './repository-tratamiento-datos.component';

describe('RepositoryTratamientoDatosComponent', () => {
  let component: RepositoryTratamientoDatosComponent;
  let fixture: ComponentFixture<RepositoryTratamientoDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryTratamientoDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryTratamientoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
