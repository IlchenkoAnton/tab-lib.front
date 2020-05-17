import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../api.service';
import { IUser, User } from '../../core/models';
import { LoginResponseDto, LoginRequestDto } from '../dto';

/**
 * Репозиторий по работе с API авторизации
 */
@Injectable()
export class AuthenticationRepository {
    constructor(
        private readonly httpClient: HttpClient,
        private readonly apiGatewayService: ApiService
    ) {}

    /**
     * Метод запроса авторизации пользователя
     * @param name - Имя пользователя
     * @param password - Пароль пользователя
     */
    public login(name: string, password: string): Observable<IUser> {
        const url: string = this.apiGatewayService.login();
        const params: LoginRequestDto = new LoginRequestDto(name, password);

        return this.httpClient.post<LoginResponseDto>(url, params)
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