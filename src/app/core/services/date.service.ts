import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { TMoment } from '@common';

const DEFAULT_FORMAT: string = 'D MMM YYYY HH:mm';
const FORMAT_WITHOUT_YEAR: string = 'D MMM HH:mm';
const FORMAT_TODAY: string = 'Сегода';

/**
 * Сервис по работе с датами
 */
@Injectable()
export class DateService {
    /**
     * Метод форматирования даты
     * @param date - Дата
     */
    public formattingDate(date: TMoment): string {
        const currentDate: TMoment = moment();

        let format: string = DEFAULT_FORMAT;

        if (currentDate.isSame(date, 'day')) {
            return FORMAT_TODAY;
        }

        if (currentDate.isSame(date, 'year')) {
            format = FORMAT_WITHOUT_YEAR;
        }

        return date.format(format);
    }
}