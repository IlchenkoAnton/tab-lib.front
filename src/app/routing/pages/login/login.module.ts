import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page.component';

/**
 * //
 */
@NgModule({
    imports: [
        LoginRoutingModule
    ],
    declarations: [
        LoginPageComponent
    ]
})
export class LoginModule {}