import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses =  [
        {

          id:23,
          name:'Angular',
          price:8000,
          offer:true,
          desc:'Angular 8 version',
          students:20
        },
        {
          id:24,
          name:'React',
          price:10000,
          offer:false,
          desc:'React 16.8 version',
          students:10
        },
        {
          id:26,
          name:'Java Spring Boot',
          price:15000,
          offer:true,
          desc:'Java Spring Boot 2.X version',
          students:15
        },
        {
          id:28,
          name:'Java MicroServices',
          price:20000,
          offer:false,
          desc:'Java Microservices',
          students:10
        }
      ]


      selectedCourse(selectedCourse){
        console.log('course selected from the child inside the parent component');
        console.log(selectedCourse)
      }
  
}
