import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSVPComponent } from './rsvp.component';

describe('RSVPComponent', () => {
  let component: RSVPComponent;
  let fixture: ComponentFixture<RSVPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RSVPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RSVPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
