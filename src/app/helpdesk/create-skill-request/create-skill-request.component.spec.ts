import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSkillRequestComponent } from './create-skill-request.component';

describe('CreateSkillRequestComponent', () => {
  let component: CreateSkillRequestComponent;
  let fixture: ComponentFixture<CreateSkillRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSkillRequestComponent]
    });
    fixture = TestBed.createComponent(CreateSkillRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
