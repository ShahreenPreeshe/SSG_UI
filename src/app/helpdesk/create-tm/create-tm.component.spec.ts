import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTmComponent } from './create-tm.component';

describe('CreateTmComponent', () => {
  let component: CreateTmComponent;
  let fixture: ComponentFixture<CreateTmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTmComponent]
    });
    fixture = TestBed.createComponent(CreateTmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
