import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColombianNomenclatureComponent } from './colombian-nomenclature.component';

describe('ColombianNomenclatureComponent', () => {
  let component: ColombianNomenclatureComponent;
  let fixture: ComponentFixture<ColombianNomenclatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColombianNomenclatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColombianNomenclatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
