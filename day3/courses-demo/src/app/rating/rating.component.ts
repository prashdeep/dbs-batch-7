import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input("rating") rating:number
  
   ratingArr:number[];
   fraction:boolean = false;

  constructor() { }
  
  ngOnInit() {
    const whole = Math.floor(this.rating)
    this.ratingArr = new Array(whole);

    this.fraction  = (this.rating - whole === 0) ?false: true  
  }



}
