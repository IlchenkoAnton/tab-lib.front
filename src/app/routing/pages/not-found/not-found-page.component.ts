import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Компонент для страницы 404
 */
@Component({
    selector: 'tl-not-found-page',
    templateUrl: './not-found-page.component.html',
    styleUrls: [ './not-found-page.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundPageComponent {}