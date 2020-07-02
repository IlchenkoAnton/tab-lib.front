import { Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { AuthorizationGuard, NotAuthorizationGuard } from '@modules/authorization';

/**
 * Конфигурация маршрутизации приложения
 */
export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [
            AuthorizationGuard
        ],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },

            {
                path: 'dashboard',
                loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
            },

            {
                path: 'private-room',
                loadChildren: './pages/private-room/private-room.module#PrivateRoomModule'
            }
        ]
    },

    {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginModule',
        canActivate: [
            NotAuthorizationGuard
        ]
    },

    {
        path: '**',
        loadChildren: './pages/not-found/not-found.module#NotFoundModule'
    }
];