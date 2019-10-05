import { Route } from "@angular/router";
import { CoursesComponent } from './courses/courses.component';
import { CompOneComponent } from './courses/comp-one/comp-one.component';
import { CompTwoComponent } from './courses/comp-two/comp-two.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from './forms/model-driven/model-driven.component';
import { TwoWayComponent } from './courses/two-way/two-way.component';
import { NotFoundComponent } from './courses/not-found/not-found.component';

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
       
      ]
    },
    {
      path:'course-details/:id',
      component:CourseDetailsComponent
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
      path:'**',
      component:NotFoundComponent
    }
  ];

  