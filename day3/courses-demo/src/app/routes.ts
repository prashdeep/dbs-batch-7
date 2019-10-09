import { CoursesComponent } from './courses/courses.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { FormatInputComponent } from './format-input/format-input.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { SortDigitsComponent } from './sort-digits/sort-digits.component';
import { TestComponent } from './test/test.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Route } from '@angular/router';
import { UserAuthGuard } from './UserAuthGuard';
import { CanDeactivateGuard } from './CanDeactivateGuard';


export const routes:Route[] = [
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
          path:'custom-directive',
          component:FormatInputComponent
        }
      ]
    },
    {
      path:'course-details/:id',
      component:CourseDetailsComponent,
      canActivate:[UserAuthGuard]
    },
    {
      path:'add',
      component:AddCourseComponent,
      children:[
        {
          path:'',
          redirectTo:'template-driven',
          pathMatch:"full"
        },
        {
          path:'template-driven',
          component:TemplateDrivenComponent
        },
        {
          path:'model-driven',
          component:ModelDrivenComponent
        }
      ]
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
      path:'test',
      component:TestComponent
    },
    {
      path:'**',
      component:NotFoundComponent
    }
  ]