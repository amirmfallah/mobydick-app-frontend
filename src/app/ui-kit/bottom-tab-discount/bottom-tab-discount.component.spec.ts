import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomTabDiscountComponent } from './bottom-tab-discount.component';

describe('BottomTabDiscountComponent', () => {
  let component: BottomTabDiscountComponent;
  let fixture: ComponentFixture<BottomTabDiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomTabDiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomTabDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
