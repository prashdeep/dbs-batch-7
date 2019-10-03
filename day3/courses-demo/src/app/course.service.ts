import { Injectable } from '@angular/core';
import { Course } from './Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses:Course[];
  
  constructor() { 
    this.courses =  [
      {

        id:23,
        name:'Angular',
        price:8000,
        offer:true,
        start_date:new Date(),
        desc:'Angular 8 version',
        rating:4.53543567,
        students:20
      },
      {
        id:24,
        name:'React',
        price:10000,
        rating:3.88354357,
        start_date:new Date(),
        offer:false,
        desc:'React 16.8 version',
        students:10
      },
      {
        id:26,
        name:'Java Spring Boot',
        price:15000,
        offer:true,
        rating:4.34563,
        start_date:new Date(),
        desc:'Java Spring Boot 2.X version',
        students:15
      },
      {
        id:28,
        name:'Java MicroServices',
        price:20000,
        rating:4.334354352,
        start_date:new Date(),
        offer:false,
        desc:'Java Microservices',
        students:10
      }
    ]
  }

  getAllCourses = ():Course[]=>{
      return this.courses;
  }

  deleteCourse(course:Course):Course[]{
    this.courses = this.courses.filter(c => c.id !== course.id);
    return this.courses;
  }

  addCourse(course:Course):Course[]{
    this.courses.push(course);
    return this.courses;
  }

  getCourseDetails(courseId):Course{
      const selectedCourse:Course = this.courses.filter(c => c.id===courseId)[0];
      console.log('inside the get course details ')
      console.log(selectedCourse);
      return selectedCourse
  }
}
