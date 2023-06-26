import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedChpComponent } from './customized-chp.component';

describe('CustomizedChpComponent', () => {
  let component: CustomizedChpComponent;
  let fixture: ComponentFixture<CustomizedChpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomizedChpComponent]
    });
    fixture = TestBed.createComponent(CustomizedChpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
