import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SignInFormComponent } from '@ui/components';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page.component';

/**
 * Модуль страницы авторизации
 */
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        FontAwesomeModule,
    ],
    declarations: [
        LoginPageComponent,
        SignInFormComponent
    ]
})
export class LoginModule {}