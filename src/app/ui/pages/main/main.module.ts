import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent, UsersMenuComponent } from '../../components';


/**
 * Модуль страницы Рабочий стол
 */
@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule
    ],
    declarations: [
        MainComponent,
        HeaderComponent,
        UsersMenuComponent
    ]
})
export class MainModule {}