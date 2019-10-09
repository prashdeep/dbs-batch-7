import { Injectable } from '@angular/core';
import { Course } from './Course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses:Course[];
  API_URL;
  constructor(private httpClient: HttpClient) {
    this.API_URL = environment.API_URL;
  }

  getAllCourses = ():Observable<Course[]>=>{
      return this.httpClient.get<Course[]>(this.API_URL);
  }

  deleteCourse(course:Course):Observable<any>{
    return this.httpClient.delete<any>(this.API_URL+course.id)
  }

  addCourse(course:Course):Observable<Course>{
    return this.httpClient.post<Course>(this.API_URL, course);
  }

  getCourseDetails(courseId):Observable<Course>{
     return this.httpClient.get<Course>(this.API_URL+courseId);
  }
}
