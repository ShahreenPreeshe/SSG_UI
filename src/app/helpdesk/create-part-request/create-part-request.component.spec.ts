import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePartRequestComponent } from './create-part-request.component';

describe('CreatePartRequestComponent', () => {
  let component: CreatePartRequestComponent;
  let fixture: ComponentFixture<CreatePartRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePartRequestComponent]
    });
    fixture = TestBed.createComponent(CreatePartRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
