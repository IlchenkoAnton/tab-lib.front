import { Injectable, Inject } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationBaseService } from './authentication-base.service';
import { AuthenticationConfig } from '../authentication-config.type';
import { IUser } from './models/user.interface';

/**
 * Гвард проверки доступа в неавторизованную зону
 */
@Injectable()
export class NotAuthenticationGuard implements CanActivate {
    constructor(
        private readonly router: Router,
        private readonly authenticationService: AuthenticationBaseService,
        @Inject('AUTHENTICATION_CONFIG_TOKEN') private readonly config: AuthenticationConfig
    ) {}

    /**
     * Метод предотвращает переход по маршруту, если присутствует пользователь
     */
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        try {
            const user: IUser = this.authenticationService.getUser();

            if (user) {
                this.router.navigate(this.config.authorizedZone);

                return false
            }
        } catch (error) {
            return true;
        }
    }
}