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

  deleteCourse(course:Course):Observable<any>{
    return this.httpClient.delete<any>("http://my-json-server.typicode.com/prashdeep/courseflix/courses/"+course.id)
  }

  addCourse(course:Course):Observable<Course>{
    return this.httpClient.post<Course>("http://my-json-server.typicode.com/prashdeep/courseflix/courses/", course);
  }

  getCourseDetails(courseId):Observable<Course>{
     return this.httpClient.get<Course>('http://my-json-server.typicode.com/prashdeep/courseflix/courses/'+courseId);
  }
}
