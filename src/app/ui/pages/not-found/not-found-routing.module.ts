import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './not-found-page.component';

const routes: Routes = [
    {
        path: '',
        component: NotFoundPageComponent
    }
];

/**
 * Модуль маршрутизации для страницы 404
 */
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class NotFoundRoutingModule {}