import { NgModule } from '@angular/core';

import { PrivateRoomRoutingModule } from './private-room-routing.module';
import { PrivateRoomPageComponent } from './private-room-page.component';

/**
 * Модуль страницы Личный кабинет
 */
@NgModule({
    imports: [
        PrivateRoomRoutingModule
    ],
    declarations: [
        PrivateRoomPageComponent
    ]
})
export class PrivateRoomModule {}