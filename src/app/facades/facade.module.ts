import { NgModule } from '@angular/core';

import { ApiService } from '../data/api.service';
import { AuthenticationRepository, TabLibRepository } from '../data/repositories';
import { NotAuthenticationGuard, AuthenticationGuard } from '../core/guards';
import { AuthenticationService } from '../core/services';
import { AuthenticationFacade } from './authentication.facade';

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

        AuthenticationFacade
    ]
})
export class FacadeModule {}