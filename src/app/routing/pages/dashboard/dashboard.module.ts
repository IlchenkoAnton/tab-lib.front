import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';

/**
 * Модуль страницы Рабочий стол
 */
@NgModule({
    imports: [
        DashboardRoutingModule
    ],
    declarations: [
        DashboardPageComponent
    ]
})
export class DashboardModule {}