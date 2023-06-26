import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeableEventComponent } from './chargeable-event.component';

describe('ChargeableEventComponent', () => {
  let component: ChargeableEventComponent;
  let fixture: ComponentFixture<ChargeableEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChargeableEventComponent]
    });
    fixture = TestBed.createComponent(ChargeableEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
