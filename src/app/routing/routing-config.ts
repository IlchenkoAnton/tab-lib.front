import { Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { AuthenticationGuard, NotAuthenticationGuard } from '../modules/authentication';

/**
 * Конфигурация маршрутизации приложения
 */
export const routes: Routes = [
    /** Страница логина */
    {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginModule',
        canActivate: [
            NotAuthenticationGuard
        ]
    },

    /** Базовый маршрут авторизованной зоны */
    {
        path: '',
        component: MainComponent,
        canActivate: [
            AuthenticationGuard
        ],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },

            /** Страница рабочего стола */
            {
                path: 'dashboard',
                loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
            }
        ]
    },

    /** Страница 404 */
    {
        path: '**',
        loadChildren: './pages/not-found/not-found.module#NotFoundModule'
    }
];