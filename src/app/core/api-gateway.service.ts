import { Injectable } from '@angular/core';

import { ApiGatewayBaseService } from './api-gateway-base.service';

@Injectable()
export class ApiGatewayService implements ApiGatewayBaseService {
    /**
     * //
     */
    public login(): string {
        return '/login';
    }

    /**
     * //
     */
    public logout(): string {
        return '/logout';
    }
}