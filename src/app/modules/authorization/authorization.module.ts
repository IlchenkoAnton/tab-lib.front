import { NgModule, ModuleWithProviders } from '@angular/core';

import { AuthorizationConfig, AUTHORIZATION_API, AUTHORIZATION_ROUTES } from './authorization-config';
import { AuthorizationRepository } from './data/authorization.repository';
import { AuthorizationService } from './core/authorization.service';
import { AuthorizationBaseRepository } from './core/authorization-base.repository';
import { AuthorizationBaseService } from './core/authorization-base.service';
import { AuthorizationGuard } from './core/authorization.guard';
import { NotAuthorizationGuard } from './core/not-authorization.guard';

@NgModule()
export class AuthorizationModule {
    static forRoot(config: AuthorizationConfig): ModuleWithProviders {
        return {
            ngModule: AuthorizationModule,
            providers: [
                AuthorizationGuard,
                NotAuthorizationGuard,
                {
                    provide: AuthorizationBaseRepository,
                    useClass: AuthorizationRepository
                },
                {
                    provide: AuthorizationBaseService,
                    useClass: AuthorizationService
                },
                {
                    provide: AUTHORIZATION_API,
                    useValue: config.apiService
                },
                {
                    provide: AUTHORIZATION_ROUTES,
                    useValue: config.routes
                }
            ]
        };
    }
}