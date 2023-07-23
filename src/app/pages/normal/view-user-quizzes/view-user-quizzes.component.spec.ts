import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserQuizzesComponent } from './view-user-quizzes.component';

describe('ViewUserQuizzesComponent', () => {
  let component: ViewUserQuizzesComponent;
  let fixture: ComponentFixture<ViewUserQuizzesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUserQuizzesComponent]
    });
    fixture = TestBed.createComponent(ViewUserQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
