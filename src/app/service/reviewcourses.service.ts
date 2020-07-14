import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ReviewcoursesService {

  constructor(private http:Http,) { }


  getreviewCourses()
  {
    return this.http.get('http://localhost:3000/api/courses')
    .map(res => res.json());
  }
}
