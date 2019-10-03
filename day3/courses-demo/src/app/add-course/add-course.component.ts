import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../Course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent  {

  constructor(private courseService:CourseService) { }

  
  addCourse(){
    const course = new Course();
    course.id = 45;
    course.desc= "Spring Security";
    course.name='Spring Security';
    course.offer = true;
    course.students = 15;
    this.courseService.addCourse(course);
  }

}
