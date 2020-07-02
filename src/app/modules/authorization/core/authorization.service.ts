import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, mapTo } from 'rxjs/operators';

import { AuthorizationBaseRepository } from './authorization-base.repository';
import { IUser } from './user.interface';
import { User } from './user';
import { AuthorizationBaseService } from './authorization-base.service';
import { AUTHORIZATION_ROUTES, RoutesConfig } from '../authorization-config';

@Injectable()
export class AuthorizationService extends AuthorizationBaseService {
    private userIdKey: string = 'userId';
    private userNameKey: string = 'userName';
    private tokenKey: string = 'token';

    constructor(
        private readonly router: Router,
        private readonly authorizationRepository: AuthorizationBaseRepository,
        @Inject(AUTHORIZATION_ROUTES) private readonly routesConfig: RoutesConfig
    ) {
        super();
    }

    public signIn(name: string, password: string): Observable<void> {
        return this.authorizationRepository.login(name, password)
            .pipe(
                tap((user: IUser) => {
                    localStorage.setItem(this.userIdKey, user.Id);
                    localStorage.setItem(this.userNameKey, user.Name);
                    localStorage.setItem(this.tokenKey, user.Token);
                }),
                catchError((error) => {
                    this.clearUserData();

                    return throwError(error);
                }),
                mapTo(null)
            );
    }

    public signOut(): Observable<void> {
        return this.authorizationRepository.logout()
            .pipe(
                tap(() => {
                    this.clearUserData();
                })
            );
    }

    public getUser(): IUser {
        const userId: string = localStorage.getItem(this.userIdKey);
        const userName: string = localStorage.getItem(this.userNameKey);
        const token: string = localStorage.getItem(this.tokenKey);

        if (!userId || !userName || !token) {
            this.clearUserData();

            throw new Error('Пользователь отсутствует');
        }

        return new User(userId, userName, token);
    }

    public redirectToAuthorizedZone(): void {
        this.router.navigate(this.routesConfig.authorizedZone);
    }

    public redirectToNotAuthorizedZone(): void {
        this.router.navigate(this.routesConfig.notAuthorizedZone);
    }

    // ///////////////
    // Закрытые методы
    // ///////////////

    private clearUserData(): void {
        localStorage.removeItem(this.userIdKey);
        localStorage.removeItem(this.userNameKey);
        localStorage.removeItem(this.tokenKey);
    }
}