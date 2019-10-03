import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlayerComponent } from './player/player.component';
import { EmployeesComponent } from './employees/employees.component';
import { CourseComponent } from './course/course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { NamePipe } from './name.pipe';
import {RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoursesComponent } from './courses/courses.component';
import { PureSortPipe } from './pure-sort.pipe';
import { ImporeSortPipe } from './impore-sort.pipe';
import { SortDigitsComponent } from './sort-digits/sort-digits.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompThreeComponent } from './comp-three/comp-three.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlayerComponent,
    EmployeesComponent,
    CourseComponent,
    AddCourseComponent,
    TwoWayComponent,
    NamePipe,
    NotFoundComponent,
    CoursesComponent,
    PureSortPipe,
    ImporeSortPipe,
    SortDigitsComponent,
    CourseDetailsComponent,
    CompOneComponent,
    CompTwoComponent,
    CompThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        redirectTo:'courses',
        pathMatch:'full'
      },
      {
        path:'courses',
        component:CoursesComponent,
        children:[
          {
            path:'',
            redirectTo:'one',
            pathMatch:'full'
          },
          {
            path:'one',
            component:CompOneComponent
          },
          {
            path:'two',
            component:CompTwoComponent
          },
          {
            path:'three',
            component:CompThreeComponent
          }
        ]
      },
      {
        path:'course-details/:id',
        component:CourseDetailsComponent
      },
      {
        path:'add',
        component:AddCourseComponent
      },
      {
        path:'two',
        component:TwoWayComponent
      },
      {
        path:'pipes',
        component:SortDigitsComponent
      },
      {
        path:'**',
        component:NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
