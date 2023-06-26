import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubServiceCasesComponent } from './sub-service-cases.component';

describe('SubServiceCasesComponent', () => {
  let component: SubServiceCasesComponent;
  let fixture: ComponentFixture<SubServiceCasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubServiceCasesComponent]
    });
    fixture = TestBed.createComponent(SubServiceCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
