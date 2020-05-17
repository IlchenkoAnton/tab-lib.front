import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { IUser } from '../models';
import { AuthenticationService } from '../services';

/**
 * Гвард проверки доступа в неавторизованную зону
 */
@Injectable()
export class NotAuthenticationGuard implements CanActivate {
    constructor(
        private readonly authenticationService: AuthenticationService
    ) {}

    /**
     * Метод предотвращает переход по маршруту, если присутствует пользователь
     */
    public canActivate(): boolean {
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