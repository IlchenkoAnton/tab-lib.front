import { Observable } from 'rxjs';

import { IUser } from '../models/user.interface';

/**
 * //
 */
export abstract class AuthenticationBaseService {
    /**
     * //
     */
    public abstract getUser(): IUser;

    /**
     * //
     */
    public abstract getToken(): string;

    /**
     * //
     */
    public abstract login(name: string, password: string): Observable<void>;

    /**
     * //
     */
    public abstract logout(): Observable<void>;
}