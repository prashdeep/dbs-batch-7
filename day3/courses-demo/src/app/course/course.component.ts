import { Component, Input } from '@angular/core';
import { Course } from '../Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent  {

  @Input('course') course:Course;
  
  

}
