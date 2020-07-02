import { Observable } from 'rxjs';
import { IUser } from './user.interface';

export abstract class AuthorizationBaseRepository {
    public abstract login(name: string, password: string): Observable<IUser>;
    public abstract logout(): Observable<void>;
}