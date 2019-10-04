import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { config } from 'rxjs';

@Component({
  selector: 'tooltip',
  template: `
    <h1>{{config.position}}</h1>      
    {{runChangeDetection}}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent implements OnInit {

@Input('config') config;

  constructor() { }

  ngOnInit() {
  }

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }

}
