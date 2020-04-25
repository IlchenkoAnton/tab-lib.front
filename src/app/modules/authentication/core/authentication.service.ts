import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { mapTo, tap, catchError } from 'rxjs/operators';

import { AuthenticationBaseService } from './authentication-base.service';
import { AuthenticationBaseRepository } from './authentication-base.repository';
import { IUser } from './models/user.interface';
import { User } from './models/user';

/**
 * Сервис авторизации
 */
@Injectable()
export class AuthenticationService implements AuthenticationBaseService {
    private userIdKey: string = 'userId';
    private userNameKey: string = 'userName';
    private tokenKey: string = 'token';

    constructor(
        private readonly authenticationRepository: AuthenticationBaseRepository
    ) {}

    /**
     * Метод входа в систему
     * @param name - Имя пользователя
     * @param password - Пароль пользователя
     */
    public signIn(name: string, password: string): Observable<void> {
        return this.authenticationRepository.login(name, password)
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

    /**
     * Метод выхода из системы
     */
    public signOut(): Observable<void> {
        return this.authenticationRepository.logout()
            .pipe(
                tap(() => {
                    this.clearUserData();
                })
            );
    }

    /**
     * Метод получения объекта пользователя
     */
    public getUser(): IUser {
        const userId: string = localStorage.getItem(this.userIdKey);
        const userName: string = localStorage.getItem(this.userNameKey);
        const token: string = localStorage.getItem(this.tokenKey);

        if (!userId || !userName || !token) {
            throw 'Пользователь не авторизован';
        }

        return new User(userId, userName, token);
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