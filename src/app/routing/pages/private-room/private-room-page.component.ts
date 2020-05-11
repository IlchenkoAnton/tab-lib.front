import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Компонент страницы Личный кабинет
 */
@Component({
    selector: 'tl-private-room-page',
    templateUrl: './private-room-page.component.html',
    styleUrls: [ './private-room-page.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateRoomPageComponent {}