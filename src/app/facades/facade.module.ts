import { NgModule } from '@angular/core';

import { ApiService } from '@data/api.service';
import { AuthenticationRepository, TabLibRepository } from '@data/repositories';
import { NotAuthenticationGuard, AuthenticationGuard } from '@core/guards';
import { AuthenticationService, TabLibService } from '@core/services';
import { AuthenticationFacade } from './authentication.facade';
import { TabLibFacade } from './tab-lib.facade';
import { TabLibStore } from './tab-lib.store';

/**
 * //
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

        AuthenticationFacade,
        TabLibFacade,

        TabLibStore
    ]
})
export class FacadeModule {}