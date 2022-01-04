import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSkeletonComponent } from './slider-skeleton.component';

describe('SliderSkeletonComponent', () => {
  let component: SliderSkeletonComponent;
  let fixture: ComponentFixture<SliderSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
