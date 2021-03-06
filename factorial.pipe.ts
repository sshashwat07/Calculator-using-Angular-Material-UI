import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'factorial'
})
export class FactorialPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let fact = 1;
    for (let i = value; i > 1; i--) {
      fact = fact * i;
    }
    return fact;
  }

}
