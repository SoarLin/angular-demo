import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nl2br'
})
export class Nl2brPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value !== 'string') {
      return value;
    }
    let result: any;
    const textParsed = value.replace(/(?:\r\n|\r|\n)/g, '<br />');
    result = textParsed;

    return result;
  }

}
