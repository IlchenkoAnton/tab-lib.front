import { NgModule } from '@angular/core';

import { DateFormatPipe } from './pipes';
import { LoadingComponent, ErrorComponent } from './components';
import { RequestStatusDirective } from './directives';

/**
 * Шаред-модуль
 */
@NgModule({
    declarations: [
        LoadingComponent,
        ErrorComponent,

        RequestStatusDirective,

        DateFormatPipe
    ],
    exports: [
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