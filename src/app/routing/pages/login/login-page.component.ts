import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LoginData } from '@common';
import { AuthorizationBaseService } from '@modules/authorization';
import { startWith, mapTo, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

/**
 * Компонент страницы авторизации
 */
@Component({
    selector: 'tl-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: [ './login-page.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
    private signIn$: Observable<boolean>;
    private message: string;

    get SignIn$(): Observable<boolean> {
        return this.signIn$;
    }

    get Message(): string {
        return this.message;
    }

    constructor(
        private readonly authorizationBaseService: AuthorizationBaseService,
        private readonly changeDetectorRef: ChangeDetectorRef
    ) {}

    public signIn(data: LoginData): void {
        this.message = null;

        this.signIn$ = this.authorizationBaseService.signIn(data.login, data.password)
            .pipe(
                mapTo(false),
                startWith(true),
                catchError((error) => {
                    console.error(error);

                    this.updateMessage(error.status);

                    return of(false);
                }),
                tap(() => {
                    this.changeDetectorRef.detectChanges();
                })
            );
    }

    private updateMessage(errorCode: number): void {
        if (errorCode >= 400 && errorCode < 500) {
            this.message = 'Не удалось распознать комбинацию логин / пароль';
        } else if (errorCode >= 500 && errorCode < 600) {
            this.message = 'Не удалось авторизоваться, попробуйте позже';
        } else {
            this.message = 'Неизвестная ошибка';
        }
    }
}