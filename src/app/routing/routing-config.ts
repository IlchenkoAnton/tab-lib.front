import { Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';

/**
 * Конфигурация маршрутизации
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
            // {
            //     path: 'login',
            //     loadChildren: null
            // },

            /** Страница рабочего стола */
            {
                path: 'dashboard',
                loadChildren: './pages/dashboard/dashboard.module#DashboardModule' 
            },
            
            /** Страница 404 */
            // {
            //     path: '**',
            //     loadChildren: null 
            // }
        ]
    }
];