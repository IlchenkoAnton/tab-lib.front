import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';
import { TabLibModule } from '../../../modules/tab-lib';

/**
 * Модуль страницы Рабочий стол
 */
@NgModule({
    imports: [
        DashboardRoutingModule,
        TabLibModule
    ],
    declarations: [
        DashboardPageComponent
    ]
})
export class DashboardModule {}