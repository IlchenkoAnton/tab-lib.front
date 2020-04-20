import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { AuthenticationBaseRepository } from '../core/authentication-base.repository';
import { IUser } from '../models/user.interface';
import { ApiGatewayBaseService } from '../../../core/api-gateway-base.service';
import { User } from '../models/user';

/**
 * //
 */
@Injectable()
export class AuthenticationRepository implements AuthenticationBaseRepository {
    private tokenKey: string;
    private user: IUser;

    constructor(
        private readonly httpClient: HttpClient,
        private readonly apiGatewayService: ApiGatewayBaseService
    ) {
        this.tokenKey = 'token';
        this.user = null;
    }

     /**
     * //
     */
    public getUser(): IUser {
        return this.user;
    }

    /**
     * //
     */
    public getToken(): string {
        return localStorage.getItem(this.tokenKey);
    }

    /**
     * //
     */
    public login(name: string, password: string): Observable<void> {
        const url: string = this.apiGatewayService.login();

        return this.httpClient.post<any>(url, { name, password })
            .pipe(
                tap((result: any) => {
                    this.user = new User(result.id, name);

                    this.setToken(result.token);
                }),
                catchError((error: HttpErrorResponse) => {
                    this.user = null;

                    return throwError(error);
                })
            );
    }

    /**
     * //
     */
    public logout(): Observable<void> {
        const url: string = this.apiGatewayService.logout();

        return this.httpClient.get<void>(url)
            .pipe(
                tap(() => {
                    this.user = null;
                    this.clearToken();
                })
            );
    }
    
    // ///////////////
    // Закрытые методы
    // ///////////////

    /**
     * //
     */
    private setToken(token: string): void {
        localStorage.setItem(this.tokenKey, token);
    }

    /**
     * //
     */
    private clearToken(): void {
        localStorage.removeItem(this.tokenKey);
    }
}