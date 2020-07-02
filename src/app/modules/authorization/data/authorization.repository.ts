import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AUTHORIZATION_API } from '../authorization-config';
import { IAuthorizationApi } from './authorization-api.interface';
import { IUser } from '../core/user.interface';
import { LoginRequestDto } from './login-request-dto';
import { LoginResponseDto } from './login-response-dto';
import { User } from '../core/user';
import { AuthorizationBaseRepository } from '../core/authorization-base.repository';

@Injectable()
export class AuthorizationRepository extends AuthorizationBaseRepository {
    constructor(
        private readonly httpClient: HttpClient,
        @Inject(AUTHORIZATION_API) private readonly authorizationApi: IAuthorizationApi
    ) {
        super();
    }

    public login(name: string, password: string): Observable<IUser> {
        const url: string = this.authorizationApi.login();
        const params: LoginRequestDto = new LoginRequestDto(name, password);

        return this.httpClient.post<LoginResponseDto>(url, params)
            .pipe(
                map((result: LoginResponseDto) => {
                    return new User(result.userId, name, result.token);
                })
            );
    }

    public logout(): Observable<void> {
        const url: string = this.authorizationApi.logout();

        return this.httpClient.get<void>(url);
    }
}