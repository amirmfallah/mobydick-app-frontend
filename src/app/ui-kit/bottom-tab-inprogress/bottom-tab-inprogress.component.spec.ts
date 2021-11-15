import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomTabInprogressComponent } from './bottom-tab-inprogress.component';

describe('BottomTabInprogressComponent', () => {
  let component: BottomTabInprogressComponent;
  let fixture: ComponentFixture<BottomTabInprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomTabInprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomTabInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
