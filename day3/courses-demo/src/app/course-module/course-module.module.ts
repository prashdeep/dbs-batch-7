import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { RouterModule } from '@angular/router';
import { RatingComponent } from './rating/rating.component';
import { NamePipe } from './name.pipe';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    CourseDetailsComponent,
    AddCourseComponent,
    RatingComponent,
    NamePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CoursesComponent,
    CourseComponent,
    CourseDetailsComponent,
    NamePipe
  ]
})
export class CourseModuleModule { }
