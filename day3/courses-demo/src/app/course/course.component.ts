import { Component, Input, EventEmitter,Output } from '@angular/core';
import { Course } from '../Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent  {

  @Input('course') course:Course;
  @Output('selected') courseSelected = new EventEmitter();
  @Output('deleteHandler') deleteCourseSelected = new EventEmitter();

  onSelect(selectedCourse){
    console.log(`course selected ....`);
    console.log(selectedCourse)
    this.courseSelected.emit(selectedCourse);
  }

  deleteCourse(course){
    console.log('came insdie the delete course method....')
    console.log(course)
    this.deleteCourseSelected.emit(course);
  }



  
  

}
