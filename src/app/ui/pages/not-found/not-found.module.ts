import { NgModule } from '@angular/core';

import { NotFoundPageComponent } from './not-found-page.component';
import { NotFoundRoutingModule } from './not-found-routing.module';

/**
 * Модуль страницы 404
 */
@NgModule({
    imports: [
        NotFoundRoutingModule
    ],
    declarations: [
        NotFoundPageComponent
    ]
})
export class NotFoundModule {}