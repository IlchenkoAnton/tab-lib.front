import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './routing-config';

/**
 * Модуль маршрутизации приложения
 */
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}