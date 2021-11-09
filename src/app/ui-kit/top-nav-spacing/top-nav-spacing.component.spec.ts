import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavSpacingComponent } from './top-nav-spacing.component';

describe('TopNavSpacingComponent', () => {
  let component: TopNavSpacingComponent;
  let fixture: ComponentFixture<TopNavSpacingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavSpacingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavSpacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
