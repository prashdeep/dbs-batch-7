import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sort-digits',
  templateUrl: './sort-digits.component.html',
  styleUrls: ['./sort-digits.component.css']
})
export class SortDigitsComponent {



  newDigit: number
  
  originalList: number[] = [
    2, 3, 4, 1
  ]

  pureSortableDigits: number[] = [
    2, 3, 4, 1
  ]

  impureSortableDigits: number[] = [
    2, 3, 4, 1
  ]

  addNewDigit() {
    if (this.newDigit == null)
      return

    this.originalList.push(this.newDigit)
    this.pureSortableDigits.push(this.newDigit)
    this.impureSortableDigits.push(this.newDigit)

    this.newDigit = null
    //this.input.focus()
  }

  get input(): string {
    return "dsfsdf";
  }

}
