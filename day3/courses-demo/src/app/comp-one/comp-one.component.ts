import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Course } from '../Course';
import { CourseService } from '../course.service';
import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit, AfterViewInit {

  courses:Course[] = [];

  @ViewChild(CourseComponent,{static:false}) courseComponent: CourseComponent;

  constructor(private courseService:CourseService, private cd: ChangeDetectorRef){}

  ngOnInit(){
    console.log('Component is loaded....')
    this.courses = []; 
    this.courseService.getAllCourses()
                      .subscribe((courses) => this.courses = courses);
    localStorage.setItem('token', 'authenticated');                  
  }

  ngOnChanges(simpleChanges){
    console.log('called when the state of the component changes')
  }

  ngOnDestroy(): void {
    console.log('Component is getting unmounted ....')   
  }

  ngAfterViewInit() {
    //this.courseComponent.message = "Setting from Parent....";
    //this.cd.detectChanges();    
  }
  ngAfterContentInit(){

  }
    selectedCourse(selectedCourse:Course){
      console.log('course selected from the child inside the parent component');
      selectedCourse.students ++;
    }

    deleteCourse(course:Course){
      console.log('deleting the course');
      this.courseService.deleteCourse(course).subscribe(data => console.log('course got deleted..'));
      this.courses = this.courses.filter(c => c.id !== course.id);
    }

}
