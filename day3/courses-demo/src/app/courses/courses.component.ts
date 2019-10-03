import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Course } from '../Course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy, OnChanges {

  courses:Course[] = [];

  constructor(private courseService:CourseService){}

  ngOnInit(){
    console.log('Component is loaded....')
    this.courses = this.courseService.getAllCourses();
  }

  ngOnChanges(simpleChanges){
    console.log('called when the state of the component changes')
  }

  ngOnDestroy(): void {
    console.log('Component is getting unmounted ....')   
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
