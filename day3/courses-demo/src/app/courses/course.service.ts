import { Injectable } from '@angular/core';
import { Course } from './Course';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses:Course[];
  API_URL = "http://my-json-server.typicode.com/prashdeep/courseflix/courses/";
  
  constructor(private httpClient: HttpClient) {}

  getAllCourses = ():Observable<Course[]>=>{
      return this.httpClient.get<Course[]>(this.API_URL)
                .pipe(
                  retry(3),
                  catchError(this.handleError)
                );
  }

  deleteCourse(course:Course):Observable<any>{
    return this.httpClient.delete<any>(this.API_URL+course.id)
            .pipe(
              retry(3),
              catchError(this.handleError)
            );
  }

  addCourse(course:Course):Observable<Course>{
    return this.httpClient.post<Course>(this.API_URL, course)
          .pipe(
            retry(3),
            catchError(this.handleError)
          )
  }

  getCourseDetails(courseId):Observable<Course>{
     return this.httpClient.get<Course>(this.API_URL+courseId)
              .pipe(
                retry(3),
                catchError(this.handleError)
              );
  }


  handleError(error){
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }
  
}
