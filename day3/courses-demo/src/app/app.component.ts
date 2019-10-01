import { Component, OnInit } from '@angular/core';
import { Course } from './Course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    courses:Course[] = [];

    constructor(private courseService:CourseService){}

    ngOnInit(){
      this.courses = this.courseService.getAllCourses();
    }



      selectedCourse(selectedCourse:Course){
        console.log('course selected from the child inside the parent component');
        selectedCourse.students ++;
        this.courses = this.courses.filter(c => c.id !== selectedCourse.id);

      }

      deleteCourse(course:Course){
        this.courses = this.courseService.deleteCourse(course);
      }
  
}
