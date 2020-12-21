import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerficadosRetencionComponent } from './cerficados-retencion.component';

describe('CerficadosRetencionComponent', () => {
  let component: CerficadosRetencionComponent;
  let fixture: ComponentFixture<CerficadosRetencionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerficadosRetencionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerficadosRetencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
