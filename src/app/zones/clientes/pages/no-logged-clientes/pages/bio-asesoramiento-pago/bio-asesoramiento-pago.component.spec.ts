import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioAsesoramientoPagoComponent } from './bio-asesoramiento-pago.component';

describe('BioAsesoramientoPagoComponent', () => {
  let component: BioAsesoramientoPagoComponent;
  let fixture: ComponentFixture<BioAsesoramientoPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioAsesoramientoPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioAsesoramientoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
