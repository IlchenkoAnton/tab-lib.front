import { AuthorizationConfig } from '@modules/authorization';

export const authorizationModuleConfig: AuthorizationConfig = {
    apiService: {
        login: () => '/login',
        logout: () => '/logout'
    },
    routes: {
        authorizedZone: [ '/', 'dashboard' ],
        notAuthorizedZone: [ '/', 'login' ]
    }
};