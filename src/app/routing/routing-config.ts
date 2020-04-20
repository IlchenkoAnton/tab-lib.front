import { Routes } from '@angular/router';

/**
 * //
 */
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        children: [
            {
                path: 'login',
                loadChildren: null
            }, {
                path: 'dashboard',
                loadChildren: null
            }, {
                path: '**',
                loadChildren: null 
            }
        ]
    }
];