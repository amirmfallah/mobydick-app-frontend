import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlenumberComponent } from './handlenumber.component';

describe('HandlenumberComponent', () => {
  let component: HandlenumberComponent;
  let fixture: ComponentFixture<HandlenumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlenumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
