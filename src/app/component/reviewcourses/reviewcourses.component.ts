import { Component, OnInit } from '@angular/core';
import { ReviewcoursesService} from '../../service/reviewcourses.service';
import {Router} from '@angular/router';
import { Course } from '../../courses';

@Component({
  selector: 'app-reviewcourses',
  templateUrl: './reviewcourses.component.html',
  styleUrls: ['./reviewcourses.component.css'],
  providers:[ReviewcoursesService]
})
export class ReviewcoursesComponent implements OnInit {
  courses:Course[];
  course:Course;
  constructor(private reviewcoursesService:ReviewcoursesService) { }

  ngOnInit() {
   
    
  }



}
