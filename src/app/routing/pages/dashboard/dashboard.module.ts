import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@ui/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';

/**
 * Модуль страницы Рабочий стол
 */
@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule
    ],
    declarations: [
        DashboardPageComponent
    ]
})
export class DashboardModule {}