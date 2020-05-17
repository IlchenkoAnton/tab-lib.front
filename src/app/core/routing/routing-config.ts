import { Routes } from '@angular/router';

import { NotAuthenticationGuard, AuthenticationGuard } from '../guards';

/**
 * Конфигурация маршрутизации приложения
 */
export const routes: Routes = [
    /** Страница логина */
    {
        path: 'login',
        loadChildren: '../../ui/pages#LoginModule',
        canActivate: [
            NotAuthenticationGuard
        ]
    },

    /** Базовый маршрут авторизованной зоны */
    {
        path: '',
        loadChildren: '../../ui/pages#MainModule',
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
                loadChildren: '../../ui/pages#DashboardModule'
            },

            /** Личный кабинет */
            {
                path: 'private-room',
                loadChildren: '../../ui/pages#PrivateRoomModule'
            }
        ]
    },

    /** Страница 404 */
    {
        path: '**',
        loadChildren: '../../ui/pages#NotFoundModule'
    }
];