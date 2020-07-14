import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { InfoComponent } from './component/info/info.component';
import { CourseComponent } from './component/course/course.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CourseService } from './service/course.service';

import { ReviewcoursesComponent } from './component/reviewcourses/reviewcourses.component';
import { ReviewcoursesService } from './service/reviewcourses.service';
import{FlashMessageModule} from 'angular-flash-message';


const appRoutes: Routes = [ 
  {path: '', component: HomeComponent},
  {path: 'info', component:InfoComponent},
  {path: 'courses',component:CourseComponent},
  {path: 'reviewcourses',component:ReviewcoursesComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    CourseComponent,
    NavbarComponent,
    ReviewcoursesComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessageModule

  ],
  providers: [CourseService,ReviewcoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
