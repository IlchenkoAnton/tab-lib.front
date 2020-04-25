import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthenticationBaseRepository } from '../core/authentication-base.repository';
import { IUser } from '../core/models/user.interface';
import { ApiGatewayBaseService } from '../../../core/api-gateway-base.service';
import { User } from '../core/models/user';
import { LoginResponseDto } from './login-response-dto';

/**
 * Репозиторий по работе с API авторизации
 */
@Injectable()
export class AuthenticationRepository implements AuthenticationBaseRepository {
    constructor(
        private readonly httpClient: HttpClient,
        private readonly apiGatewayService: ApiGatewayBaseService
    ) {}

    /**
     * Метод запроса авторизации пользователя
     * @param name - Имя пользователя
     * @param password - Пароль пользователя
     */
    public login(name: string, password: string): Observable<IUser> {
        const url: string = this.apiGatewayService.login();

        return this.httpClient.post<LoginResponseDto>(url, { name, password })
            .pipe(
                map((result: LoginResponseDto) => {
                    return new User(result.userId, name, result.token);
                })
            );
    }

    /**
     * Метод запроса выхода из системы
     */
    public logout(): Observable<void> {
        const url: string = this.apiGatewayService.logout();

        return this.httpClient.get<void>(url);
    }
}