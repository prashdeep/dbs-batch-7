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
          price:10000,
          desc:'Angular 8 version'
        },
        {
          id:24,
          name:'React',
          price:10000,
          desc:'React 16.8 version'
        },
        {
          id:26,
          name:'Java Spring Boot',
          price:15000,
          desc:'Java Spring Boot 2.X version'
        },
        {
          id:28,
          name:'Java MicroServices',
          price:20000,
          desc:'Java Microservices'
        }
      ]
  
}
