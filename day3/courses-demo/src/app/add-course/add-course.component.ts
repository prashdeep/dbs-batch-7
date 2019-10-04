import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../Course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent  {

  constructor(private courseService:CourseService, private router:Router) { }

  
  addCourse(){
    
  }

  displayCourseName(courseName){
    console.log(courseName)
  }

  handleSubmit({value}){
    const course = new Course();
    course.id = Math.ceil(Math.random() * 100);
    course.desc= value.courseDesc;
    course.name= value.courseName;
    course.offer = value.offer;
    course.price = value.coursePrice;
    this.courseService.addCourse(course);
    this.router.navigate(['courses'])
  }

}
