import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCaseComponent } from './search-case.component';

describe('SearchCaseComponent', () => {
  let component: SearchCaseComponent;
  let fixture: ComponentFixture<SearchCaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCaseComponent]
    });
    fixture = TestBed.createComponent(SearchCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
