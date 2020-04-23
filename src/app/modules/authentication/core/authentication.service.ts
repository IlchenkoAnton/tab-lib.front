import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthenticationBaseService } from './authentication-base.service';
import { AuthenticationBaseRepository } from './authentication-base.repository';
import { IUser } from '../models/user.interface';

/**
 * //
 */
@Injectable()
export class AuthenticationService implements AuthenticationBaseService {
    constructor(
        private readonly authenticationRepository: AuthenticationBaseRepository
    ) {}

    /**
     * //
     */
    public getUser(): IUser {
        return this.authenticationRepository.getUser();
    }

    /**
     * //
     */
    public getToken(): string {
        return this.authenticationRepository.getToken();
    }

    /**
     * //
     */
    public login(name: string, password: string): Observable<void> {
        return this.authenticationRepository.login(name, password);
    }

    /**
     * //
     */
    public logout(): Observable<void> {
        return this.authenticationRepository.logout();
    }
}