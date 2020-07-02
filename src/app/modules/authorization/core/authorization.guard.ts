import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { IUser } from './user.interface';
import { AuthorizationBaseService } from './authorization-base.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {
    constructor(
        private readonly authorizationService: AuthorizationBaseService
    ) {}

    public canActivate(): boolean {
        try {
            const user: IUser = this.authorizationService.getUser();
            
            if (user) {
                return true;
            }
        } catch (error) {
            console.error(error);

            this.authorizationService.redirectToNotAuthorizedZone();
        }

        return false;
    }
}