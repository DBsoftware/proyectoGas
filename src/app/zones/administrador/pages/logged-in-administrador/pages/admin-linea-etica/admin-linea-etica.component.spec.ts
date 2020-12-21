import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLineaEticaComponent } from './admin-linea-etica.component';

describe('AdminLineaEticaComponent', () => {
  let component: AdminLineaEticaComponent;
  let fixture: ComponentFixture<AdminLineaEticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLineaEticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLineaEticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
