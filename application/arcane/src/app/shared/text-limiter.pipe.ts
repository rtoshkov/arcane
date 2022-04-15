import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLimiter'
})
export class TextLimiterPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length > 200){
      return `${value.substring(0, 200)}...`
    }
    return value;
  }

}
