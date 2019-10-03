import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureSort'
})
export class PureSortPipe implements PipeTransform {


  transform(array: number[], ...args: any[]): number[] {
    return array.sort((a:number, b:number) => a - b);
  }

}
