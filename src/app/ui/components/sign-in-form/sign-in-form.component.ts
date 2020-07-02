import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Компонент формы авторизации
 */
@Component({
    selector: 'tl-sign-in-form',
    templateUrl: './sign-in-form.component.html',
    styleUrls: [ './sign-in-form.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInFormComponent {
    
}