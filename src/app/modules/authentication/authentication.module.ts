import { NgModule, ModuleWithProviders } from '@angular/core';

import { AuthenticationBaseRepository } from './core/authentication-base.repository';
import { AuthenticationRepository } from './data/authentication.repository';
import { AuthenticationBaseService } from './core/authentication-base.service';
import { AuthenticationService } from './core/authentication.service';
import { AuthenticationGuard } from './core/authentication.guard';
import { AuthenticationConfig } from './authentication-config.type';

/**
 * Модуль авторизации
 */
@NgModule({})
export class AuthenticationModule {
    public static forRoot(config: AuthenticationConfig): ModuleWithProviders {
        return {
            ngModule: AuthenticationModule,
            providers: [
                {
                    provide: 'AUTHENTICATION_CONFIG_TOKEN',
                    useValue: config
                },
                {
                    provide: AuthenticationBaseRepository,
                    useClass: AuthenticationRepository
                }, {
                    provide: AuthenticationBaseService,
                    useClass: AuthenticationService
                },
                AuthenticationGuard
            ]
        };
    }
}