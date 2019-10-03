import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayValue:string;

  handleTextChange(event){
    console.log(event.target.value);
    this.displayValue = event.target.value;
  }

}
