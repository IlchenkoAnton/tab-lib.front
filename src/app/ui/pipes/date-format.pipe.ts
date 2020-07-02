import { Pipe, PipeTransform } from '@angular/core';

import { TMoment } from '@common';

/**
 * Пайп форматирования даты
 */
@Pipe({
    name: 'tlDateFormat'
})
export class DateFormatPipe implements PipeTransform {
   constructor(
   ) {}

   public transform(date: TMoment): string {
       return '';
   }
}