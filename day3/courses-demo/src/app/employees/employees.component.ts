import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  employees = [
    {
      id:10,
      name:'Prakash',
      age:24,
      dept:'HR'
    },
    {
      id:11,
      name:'Praveen',
      age:25,
      dept:'Payroll'
    },
    {
      id:12,
      name:'Harish',
      age:28,
      dept:'Finance'
    }
    
  ]

}
