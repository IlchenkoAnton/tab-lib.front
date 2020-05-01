import { Observable } from 'rxjs';

import { IUser } from './models/user.interface';

/**
 * Базовый класс для сервиса авторизации
 */
export abstract class AuthenticationBaseService {
    /**
     * Метод входа в систему
     * @param name - Имя пользователя
     * @param password - Пароль пользователя
     */
    public abstract signIn(name: string, password: string): Observable<void>;

    /**
     * Метод выхода из системы
     */
    public abstract signOut(): Observable<void>;

    /**
     * Метод получения объекта пользователя
     */
    public abstract getUser(): IUser;

    /**
     * Метод перенаправления маршрута в авторизованную зону
     */
    public abstract redirectToAuthorizedZone(): void;

    /**
     * Метод перенаправления маршрута в неавторизованную зону
     */
    public abstract redirectToNotAuthorizedZone(): void;
}