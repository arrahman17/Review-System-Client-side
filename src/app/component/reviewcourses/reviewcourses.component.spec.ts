import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewcoursesComponent } from './reviewcourses.component';

describe('ReviewcoursesComponent', () => {
  let component: ReviewcoursesComponent;
  let fixture: ComponentFixture<ReviewcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
