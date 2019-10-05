import { Injectable } from '@angular/core';
import { Course } from './Course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses:Course[];
  
  constructor(private httpClient: HttpClient) {}

  getAllCourses = ():Observable<Course[]>=>{
      return this.httpClient.get<Course[]>("http://my-json-server.typicode.com/prashdeep/courseflix/courses/");
  }

  deleteCourse(course:Course):Course[]{
    this.courses = this.courses.filter(c => c.id !== course.id);
    return this.courses;
  }

  addCourse(course:Course):Course[]{
    this.courses.push(course);
    return this.courses;
  }

  getCourseDetails(courseId):Observable<Course>{
     return this.httpClient.get<Course>('http://my-json-server.typicode.com/prashdeep/courseflix/courses/'+courseId);
  }
}
