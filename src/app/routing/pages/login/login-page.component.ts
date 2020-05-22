import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Компонент страницы авторизации
 */
@Component({
    selector: 'tl-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: [ './login-page.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {}