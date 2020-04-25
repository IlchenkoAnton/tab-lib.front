import { Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { NotFoundPageComponent } from './pages/not-found/not-found-page.component';

/**
 * Конфигурация маршрутизации приложения
 */
export const routes: Routes = [
    /** Базовый маршрут */
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },

            /** Страница логина */
            {
                path: 'login',
                loadChildren: './pages/login/login.module#LoginModule'
            },

            /** Страница рабочего стола */
            {
                path: 'dashboard',
                loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
            },
            
            /** Страница 404 */
            {
                path: '**',
                loadChildren: './pages/not-found/not-found.module#NotFoundModule'
            }
        ]
    }
];