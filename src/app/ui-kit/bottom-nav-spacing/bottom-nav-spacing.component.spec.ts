import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavSpacingComponent } from './bottom-nav-spacing.component';

describe('BottomNavSpacingComponent', () => {
  let component: BottomNavSpacingComponent;
  let fixture: ComponentFixture<BottomNavSpacingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomNavSpacingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavSpacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
