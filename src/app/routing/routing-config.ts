import { Routes } from '@angular/router';

/**
 * Конфигурация маршрутизации
 */
export const routes: Routes = [
    /** Абстрактный базовый маршрут */
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        children: [
            /** Страница логина */
            {
                path: 'login',
                loadChildren: null
            },

            /** Страница рабочего стола */
            {
                path: 'dashboard',
                loadChildren: null
            },
            
            /** Страница 404 */
            {
                path: '**',
                loadChildren: null 
            }
        ]
    }
];