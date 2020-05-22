import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page.component';

const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    }
];

/**
 * Модуль маршрутизации страницы авторизации
 */
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class LoginRoutingModule {}