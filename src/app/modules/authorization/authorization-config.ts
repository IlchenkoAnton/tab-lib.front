import { InjectionToken } from '@angular/core';

import { IAuthorizationApi } from './data/authorization-api.interface';

export const AUTHORIZATION_API: InjectionToken<string> = new InjectionToken<string>('AuthorizationApi');
export const AUTHORIZATION_ROUTES: InjectionToken<string> = new InjectionToken<string>('AuthorizationRoutes');

export type AuthorizationConfig = {
    apiService: IAuthorizationApi;
    routes: RoutesConfig;
};

export type RoutesConfig = {
    authorizedZone: string[];
    notAuthorizedZone: string[];
};