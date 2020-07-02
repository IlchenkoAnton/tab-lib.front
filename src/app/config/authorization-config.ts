import { AuthorizationConfig } from '@modules/authorization';

export const authorizationConfig: AuthorizationConfig = {
    apiService: {
        login: () => '/login',
        logout: () => '/logout'
    },
    routes: {
        authorizedZone: [ '/', 'dashboard' ],
        notAuthorizedZone: [ '/', 'login' ]
    }
};