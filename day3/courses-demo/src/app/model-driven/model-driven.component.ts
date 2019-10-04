import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent {

  constructor(private courseService:CourseService, private router:Router) { }

    modelForm = new FormGroup({
      courseName:new FormControl('',[
        Validators.minLength(3),
        Validators.requiredTrue,
        Validators.maxLength(10)
      ]),
      courseDesc: new FormControl('', [
        Validators.minLength(3),
        Validators.requiredTrue,
        Validators.maxLength(10)
      ]),
      coursePrice: new FormControl('', [
        Validators.min(5000),
        Validators.requiredTrue,
        Validators.max(15000)
      ]),
      startDate:new FormControl('',[
        Validators.requiredTrue,
       ]),
      offer:new FormControl('',[Validators.required])
    });

}
