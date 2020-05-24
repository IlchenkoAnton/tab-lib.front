import { NgModule } from '@angular/core';

import { DateFormatPipe } from './pipes';
import { TextSearchFieldComponent, LoadingComponent, ErrorComponent } from './components';
import { RequestStatusDirective } from './directives';

/**
 * Шаред-модуль
 */
@NgModule({
    declarations: [
        TextSearchFieldComponent,
        LoadingComponent,
        ErrorComponent,

        RequestStatusDirective,

        DateFormatPipe
    ],
    exports: [
        TextSearchFieldComponent,
        LoadingComponent,
        ErrorComponent,

        RequestStatusDirective,

        DateFormatPipe
    ],
    entryComponents: [
        LoadingComponent,
        ErrorComponent
    ]
})
export class SharedModule {}