import { Component } from '@angular/core';

@Component({
  template: `
    <tooltip [config]="config"></tooltip>
  `
})
export class TestComponent  {

  config={
    position:'top'
  }
  onClick() {
    this.config.position = 'bottom';
  }
}
