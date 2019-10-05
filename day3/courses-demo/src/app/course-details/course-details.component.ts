import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from '../Course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  
  selectedCourse:Course;
  constructor(private activatedRoute:ActivatedRoute, private  courseService:CourseService) { }


  ngOnInit() {
    const courseId = this.activatedRoute.snapshot.paramMap.get('id');
    this.courseService.getCourseDetails(+courseId).subscribe(courseDetails => this.selectedCourse = courseDetails);
    
  }

}
