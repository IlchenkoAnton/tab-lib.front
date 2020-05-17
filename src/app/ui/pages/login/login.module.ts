import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page.component';
import { SignInFormComponent } from '../../components';

/**
 * Модуль страницы авторизации
 */
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule
    ],
    declarations: [
        LoginPageComponent,
        SignInFormComponent
    ]
})
export class LoginModule {}