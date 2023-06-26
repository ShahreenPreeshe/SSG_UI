import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCasebookComponent } from './view-casebook.component';

describe('ViewCasebookComponent', () => {
  let component: ViewCasebookComponent;
  let fixture: ComponentFixture<ViewCasebookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCasebookComponent]
    });
    fixture = TestBed.createComponent(ViewCasebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
