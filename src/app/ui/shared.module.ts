import { NgModule } from '@angular/core';

import { DateFormatPipe } from './pipes';
import { TextSearchFieldComponent } from './components';

/**
 * Шаред-модуль
 */
@NgModule({
    declarations: [
        TextSearchFieldComponent,

        DateFormatPipe
    ],
    exports: [
        TextSearchFieldComponent,

        DateFormatPipe
    ]
})
export class SharedModule {}