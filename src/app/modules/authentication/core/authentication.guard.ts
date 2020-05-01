import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { IUser } from './models/user.interface';
import { AuthenticationBaseService } from './authentication-base.service';

/**
 * Гвард проверки доступа в авторизованную зону
 */
@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(
        private readonly authenticationService: AuthenticationBaseService
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

            this.authenticationService.redirectToNotAuthorizedZone();
        }

        return false;
    }
}