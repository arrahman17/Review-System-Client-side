import { TestBed, inject } from '@angular/core/testing';

import { ReviewcoursesService } from './reviewcourses.service';

describe('ReviewcoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReviewcoursesService]
    });
  });

  it('should be created', inject([ReviewcoursesService], (service: ReviewcoursesService) => {
    expect(service).toBeTruthy();
  }));
});
