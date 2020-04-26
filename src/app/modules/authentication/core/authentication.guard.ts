import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';

import { IUser } from './models/user.interface';
import { AuthenticationBaseService } from './authentication-base.service';
import { ErrorCode } from '../../../core';
import { AuthenticationConfig } from '../authentication-config.type';

/**
 * Гвард авторизации
 */
@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(
        private readonly router: Router,
        private readonly authenticationService: AuthenticationBaseService,
        @Inject('AUTHENTICATION_CONFIG_TOKEN') private readonly config: AuthenticationConfig
    ) {}

    /**
     * Метод предотвращает переход по маршруту, если отсутствует пользователь
     */
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        try {
            const user: IUser = this.authenticationService.getUser();
            
            if (user) {
                return true;
            }
        } catch (error) {
            console.error(error);

            this.router.navigate(this.config.redirectPath);
        }

        return false;
    }
}