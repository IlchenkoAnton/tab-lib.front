import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@ui/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';
import { BookmarkModule } from '@modules/bookmark';
import { bookmarkModuleConfig } from '@config/bookmark-module-config';

/**
 * Модуль страницы Рабочий стол
 */
@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
        BookmarkModule.forRoot(bookmarkModuleConfig)
    ],
    declarations: [
        DashboardPageComponent
    ]
})
export class DashboardModule {}