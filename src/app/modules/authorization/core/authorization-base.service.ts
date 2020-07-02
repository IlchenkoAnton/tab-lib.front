import { Observable } from 'rxjs';

import { IUser } from './user.interface';

export abstract class AuthorizationBaseService {
    public abstract signIn(name: string, password: string): Observable<void>;
    public abstract signOut(): Observable<void>;
    public abstract getUser(): IUser;
    public abstract redirectToAuthorizedZone(): void;
    public abstract redirectToNotAuthorizedZone(): void;
}