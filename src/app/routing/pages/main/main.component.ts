import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Основной компонент страниц приложения
 */
@Component({
    selector: 'tl-main-page',
    templateUrl: './main.component.html',
    styleUrls: [ './main.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {}