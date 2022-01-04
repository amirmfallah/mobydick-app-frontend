import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavSkeletonComponent } from './fav-skeleton.component';

describe('FavSkeletonComponent', () => {
  let component: FavSkeletonComponent;
  let fixture: ComponentFixture<FavSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
