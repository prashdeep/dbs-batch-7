import { Component, Input, EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent  {

  constructor(private router:Router){}

  @Input('course') course:Course;
  @Output('selected') courseSelected = new EventEmitter();
  @Output('deleteHandler') deleteCourseSelected = new EventEmitter();

  onSelect(selectedCourse){
    console.log(`course selected ....`);
    console.log(selectedCourse)
    this.courseSelected.emit(selectedCourse);
  }

  message:string;

  deleteCourse(course){
    console.log('came insdie the delete course method....')
    console.log(course)
    this.deleteCourseSelected.emit(course);
  }

  courseDetails(course){
    this.router.navigate(['/course-details', course.id]);
  }



  
  

}
