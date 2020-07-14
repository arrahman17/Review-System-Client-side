import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
//import { ENETUNREACH } from 'constants';
import { Course } from './../courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
 course:any;
  constructor(private http:Http,) { }

  getCourses()
  {
    return this.http.get('http://localhost:3000/api/courses')
    .map(res => res.json());
  }

  addCourse(Course){
  let headers = new Headers();
  headers.append('Content-type','application/json');
  return this.http.post('http://localhost:3000/api/course',   Course, {headers:headers})
  .map(res  => res.json());
}

}
 