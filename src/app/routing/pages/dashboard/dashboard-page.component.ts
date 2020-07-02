import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Компонент страницы Рабочий стол
 */
@Component({
    selector: 'tl-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: [ './dashboard-page.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent {
    
}