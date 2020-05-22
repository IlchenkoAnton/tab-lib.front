import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateRoomPageComponent } from './private-room-page.component';

const routes: Routes = [
    {
        path: '',
        component: PrivateRoomPageComponent
    }
];

/**
 * Модуль маршрутизации страницы Личный кабинет
 */
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PrivateRoomRoutingModule {}