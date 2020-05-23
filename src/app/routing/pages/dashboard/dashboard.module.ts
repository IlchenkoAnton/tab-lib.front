import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewTabListComponent, TabInfoComponent } from '@ui/components';
import { MatCardModule } from '@angular/material';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';

/**
 * Модуль страницы Рабочий стол
 */
@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatCardModule
    ],
    declarations: [
        DashboardPageComponent,
        OverviewTabListComponent,
        TabInfoComponent
    ]
})
export class DashboardModule {}