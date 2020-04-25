import { Observable } from 'rxjs';

import { IUser } from './models/user.interface';

/**
 * Базовый класс для репозитория авторизации
 */
export abstract class AuthenticationBaseRepository {
    /**
     * Метод запроса авторизации пользователя
     * @param name - Имя пользователя
     * @param password - Пароль пользователя
     */
    public abstract login(name: string, password: string): Observable<IUser>;

    /**
     * Метод запроса выхода из системы
     */
    public abstract logout(): Observable<void>;
}