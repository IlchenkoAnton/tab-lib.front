import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { IUser } from '../models';
import { AuthenticationService } from '../services';

/**
 * Гвард проверки доступа в авторизованную зону
 */
@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(
        private readonly authenticationService: AuthenticationService
    ) {}

    /**
     * Метод предотвращает переход по маршруту, если отсутствует пользователь
     */
    public canActivate(): boolean {
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