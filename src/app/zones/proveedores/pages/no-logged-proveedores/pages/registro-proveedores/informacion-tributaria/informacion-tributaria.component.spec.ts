import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionTributariaComponent } from './informacion-tributaria.component';

describe('InformacionTributariaComponent', () => {
  let component: InformacionTributariaComponent;
  let fixture: ComponentFixture<InformacionTributariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionTributariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionTributariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
