import { Injectable } from '@angular/core';

/**
 * API
 */
@Injectable()
export class ApiService {
    /**
     * Логин
     */
    public login(): string {
        return '/login';
    }

    /**
     * Разлогин
     */
    public logout(): string {
        return '/logout';
    }

    /**
     * Список табов (закладок)
     */
    public tabList(): string {
        return '/tab-list';
    }
}