import { NgModule } from '@angular/core';

import { AuthenticationBaseRepository } from './core/authentication-base.repository';
import { AuthenticationRepository } from './data/authentication.repository';
import { AuthenticationBaseService } from './core/authentication-base.service';
import { AuthenticationService } from './core/authentication.service';

/**
 * Модуль авторизации
 */
@NgModule({
    imports: [],
    providers: [
        {
            provide: AuthenticationBaseRepository,
            useClass: AuthenticationRepository
        }, {
            provide: AuthenticationBaseService,
            useClass: AuthenticationService
        }
    ]
})
export class AuthenticationModule {}