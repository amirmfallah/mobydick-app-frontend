import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSentComponent } from './code-sent.component';

describe('CodeSentComponent', () => {
  let component: CodeSentComponent;
  let fixture: ComponentFixture<CodeSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
