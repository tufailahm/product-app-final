import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: any, param:string): unknown {

    if(undefined !== value && value.length === 12)
    {
      //+(91)-88672-05331
       return '+('+value.substring(0,2)+')'+param+value.substring(2,7)+param+value.substring(7,12);
    }
    return '';
  }

}
