import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../service/course.service' 
import{FlashMessage} from 'angular-flash-message';
import {Router} from '@angular/router';
import { Course } from '../../courses';
//import {Course} from '.../courses';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [CourseService]
})
export class CourseComponent implements OnInit {
 
courses:Course[];
course:Course;
course_name:string;
diff_rate:string;
course_material:string;
prof_friendli:string;
course_content:string;

 constructor(private courseService: CourseService,private router: Router, private flashMessage: FlashMessage) { }
// Method for review on speceific course (it is basically a post method)
 addCourse(){
  const newCourse ={
    course_name:this.course_name,
    diff_rate: this.diff_rate,
    course_material: this.course_material,
    prof_friendli: this.prof_friendli,
    course_content: this.course_content
   
 }
      this.courseService.addCourse(newCourse)  
      .subscribe(course => {
        this.courses.push(course);
      
        if (course.success){
          this.flashMessage.success('you are done with your review', {cssClass: 'alert-success', timeout:3000});
        
        }else{
          this.flashMessage.danger('you are not done with your review', {cssClass: 'alert-danger', timeout:3000});
        }


       
        
      });    
      // after successfully adding the review to the database , it will redirect to the the review page , where we can just check the review 
      //this.router.navigate(['/reviewcourses']);                 
 }
 


  ngOnInit() {
   
    
  }

  


}
