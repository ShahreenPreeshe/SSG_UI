import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCaseBasicComponent } from './search-case-basic.component';

describe('SearchCaseBasicComponent', () => {
  let component: SearchCaseBasicComponent;
  let fixture: ComponentFixture<SearchCaseBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCaseBasicComponent]
    });
    fixture = TestBed.createComponent(SearchCaseBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
