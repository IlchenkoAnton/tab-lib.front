import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page.component';
import { SignInFormComponent } from '@ui/components';

/**
 * Модуль страницы авторизации
 */
@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule
    ],
    declarations: [
        LoginPageComponent,
        SignInFormComponent
    ]
})
export class LoginModule {}