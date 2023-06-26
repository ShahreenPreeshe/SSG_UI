import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousCasesComponent } from './previous-cases.component';

describe('PreviousCasesComponent', () => {
  let component: PreviousCasesComponent;
  let fixture: ComponentFixture<PreviousCasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousCasesComponent]
    });
    fixture = TestBed.createComponent(PreviousCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
