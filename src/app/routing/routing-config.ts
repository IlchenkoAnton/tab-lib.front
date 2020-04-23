import { Routes } from '@angular/router';

/**
 * Конфигурация маршрутизации
 */
export const routes: Routes = [
    /** Абстрактный базовый маршрут */
    {
        path: '',
        children: [
            // {
            //     path: '',
            //     redirectTo: 'dashboard',
            //     pathMatch: 'full'
            // },

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