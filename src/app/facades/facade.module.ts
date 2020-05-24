import { NgModule } from '@angular/core';

import { ApiService } from '@data/api.service';
import { AuthenticationRepository, TabLibRepository } from '@data/repositories';
import { NotAuthenticationGuard, AuthenticationGuard } from '@core/guards';
import { AuthenticationService, TabLibService, DateService } from '@core/services';
import { AuthenticationFacade } from './authentication.facade';
import { TabLibFacade } from './tab-lib.facade';
import { TabLibStore } from './tab-lib.store';
import { UtilityFacade } from './utility.facade';

/**
 * Модуль фасадов
 */
@NgModule({
    providers: [
        ApiService,
        AuthenticationRepository,
        TabLibRepository,
        
        NotAuthenticationGuard,
        AuthenticationGuard,

        AuthenticationService,
        TabLibService,
        DateService,

        AuthenticationFacade,
        TabLibFacade,
        UtilityFacade,

        TabLibStore
    ]
})
export class FacadeModule {}