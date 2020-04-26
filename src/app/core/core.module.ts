import { NgModule } from '@angular/core';

import { ApiGatewayBaseService } from './api-gateway-base.service';
import { ApiGatewayService } from './api-gateway.service';

/**
 * CORE-модуль общие штуки
 */
@NgModule({
    providers: [
        {
            provide: ApiGatewayBaseService,
            useClass: ApiGatewayService
        }
    ]
})
export class CoreModule {}