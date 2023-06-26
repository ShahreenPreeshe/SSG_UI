import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFollowerComponent } from './add-follower.component';

describe('AddFollowerComponent', () => {
  let component: AddFollowerComponent;
  let fixture: ComponentFixture<AddFollowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFollowerComponent]
    });
    fixture = TestBed.createComponent(AddFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
