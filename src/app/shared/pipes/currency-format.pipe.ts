import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let currency = value.toString();
    return currency
    // return null;
  }

}
