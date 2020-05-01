import { Injectable } from '@angular/core';

import { ApiGatewayBaseService } from './api-gateway-base.service';

/**
 * API шлюз
 */
@Injectable()
export class ApiGatewayService implements ApiGatewayBaseService {
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
}