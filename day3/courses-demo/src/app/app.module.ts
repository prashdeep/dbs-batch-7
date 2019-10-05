import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { HelloComponent } from './hello/hello.component';
import { TestComponent } from './test/test.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { FormatInputComponent } from './format-input/format-input.component';
import { FormatPhoneDirective } from './format-phone.directive';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { RatingComponent } from './rating/rating.component';
import {HttpClientModule} from '@angular/common/http';
import { routes } from './routes';
import { UserAuthGuard } from './UserAuthGuard';
import { CanDeactivateGuard } from './CanDeactivateGuard';

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
    CompThreeComponent,
    HelloComponent,
    TestComponent,
    TooltipComponent,
    FormatInputComponent,
    FormatPhoneDirective,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserAuthGuard, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
