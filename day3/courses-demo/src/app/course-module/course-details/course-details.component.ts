import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Course';
import { CourseService } from 'src/app/course.service';

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
