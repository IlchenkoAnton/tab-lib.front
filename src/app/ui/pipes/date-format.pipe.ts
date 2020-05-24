import { Pipe, PipeTransform } from '@angular/core';

import { TMoment } from '@common';
import { UtilityFacade } from '@facades';

/**
 * Пайп форматирования даты
 */
@Pipe({
    name: 'tlDateFormat'
})
export class DateFormatPipe implements PipeTransform {
   constructor(
       private readonly utilityFacade: UtilityFacade
   ) {}

   public transform(date: TMoment): string {
       return this.utilityFacade.formattingDate(date);
   }
}