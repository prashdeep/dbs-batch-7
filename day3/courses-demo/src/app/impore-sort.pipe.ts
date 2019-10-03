import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imporeSort',
  pure:false
})
export class ImporeSortPipe implements PipeTransform {

  transform(array: number[], ...args: any[]): number[] {
    return array.sort((a:number, b:number) => a - b);
  }

}
