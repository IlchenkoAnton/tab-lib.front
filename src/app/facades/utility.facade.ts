import { Injectable } from '@angular/core';

import { DateService } from '@core/services';
import { TMoment } from '@common';

/**
 * Фасад для всяких полезных штук
 */
@Injectable()
export class UtilityFacade {
    constructor(
        private readonly dateService: DateService
    ) {}

    /**
     * Метод форматирования даты
     * @param date - Дата
     */
    public formattingDate(date: TMoment): string {
        if (date) {
            return this.dateService.formattingDate(date);
        } else {
            return '';
        }
    }
}