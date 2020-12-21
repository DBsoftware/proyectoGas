import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizacionDialogComponent } from './autorizacion-dialog.component';

describe('AutorizacionDialogComponent', () => {
  let component: AutorizacionDialogComponent;
  let fixture: ComponentFixture<AutorizacionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorizacionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizacionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
