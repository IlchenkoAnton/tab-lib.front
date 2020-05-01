import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationBaseService } from './authentication-base.service';
import { IUser } from './models/user.interface';

/**
 * Гвард проверки доступа в неавторизованную зону
 */
@Injectable()
export class NotAuthenticationGuard implements CanActivate {
    constructor(
        private readonly authenticationService: AuthenticationBaseService
    ) {}

    /**
     * Метод предотвращает переход по маршруту, если присутствует пользователь
     */
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        try {
            const user: IUser = this.authenticationService.getUser();

            if (user) {
                this.authenticationService.redirectToAuthorizedZone();

                return false
            }
        } catch (error) {
            return true;
        }
    }
}