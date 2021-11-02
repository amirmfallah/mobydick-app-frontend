import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterPhoneNumberComponent } from './enter-phone-number.component';

describe('EnterPhoneNumberComponent', () => {
  let component: EnterPhoneNumberComponent;
  let fixture: ComponentFixture<EnterPhoneNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterPhoneNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
