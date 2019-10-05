import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course/add-course.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RatingComponent } from './rating/rating.component';
import { TwoWayComponent } from './two-way/two-way.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    AddCourseComponent,
    CompOneComponent,
    CompThreeComponent,
    CompTwoComponent,
    CourseComponent,
    CourseDetailsComponent,
    NavbarComponent,
    NotFoundComponent,
    RatingComponent,
    TwoWayComponent
  ]
})
export class CoursesModule { }
