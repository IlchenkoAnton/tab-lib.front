import { NgModule } from '@angular/core';

import { DateFormatPipe } from './pipes';

/**
 * Шаред-модуль
 */
@NgModule({
    declarations: [
        DateFormatPipe
    ],
    exports: [
        DateFormatPipe
    ]
})
export class SharedModule {}