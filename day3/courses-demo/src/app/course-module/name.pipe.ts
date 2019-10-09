import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../Course';

@Pipe({
  name: 'formatter'
})
export class NamePipe implements PipeTransform {

  transform(course:Course, ...args: any[]): string {
     const name:string = args[0];
     const formatter = args[1];
     const result = formatter === 'uppercase'? course[name].toUpperCase(): course[name].toLowerCase();
    return ` ${result}`;
  }

}
