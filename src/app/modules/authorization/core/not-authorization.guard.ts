import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthorizationBaseService } from './authorization-base.service';
import { IUser } from './user.interface';

@Injectable()
export class NotAuthorizationGuard implements CanActivate {
    constructor(
        private readonly authorizationService: AuthorizationBaseService
    ) {}

    public canActivate(): boolean {
        try {
            const user: IUser = this.authorizationService.getUser();

            if (user) {
                this.authorizationService.redirectToAuthorizedZone();

                return false
            }
        } catch (error) {
            console.error(error);

            return true;
        }
    }
}