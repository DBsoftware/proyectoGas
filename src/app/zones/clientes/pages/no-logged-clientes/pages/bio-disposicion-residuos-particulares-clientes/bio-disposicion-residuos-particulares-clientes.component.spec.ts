import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioDisposicionResiduosParticularesComponent } from './bio-disposicion-residuos-particulares.component';

describe('BioDisposicionResiduosParticularesComponent', () => {
  let component: BioDisposicionResiduosParticularesComponent;
  let fixture: ComponentFixture<BioDisposicionResiduosParticularesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioDisposicionResiduosParticularesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioDisposicionResiduosParticularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
