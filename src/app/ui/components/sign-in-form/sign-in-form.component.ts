import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntil, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { OnDestroyBase } from '@common';
import { SignInFormControlName, AuthenticationFacade } from '@facades';
import { ErrorCode } from '@core/enums';

/**
 * Компонент формы авторизации
 */
@Component({
    selector: 'tl-sign-in-form',
    templateUrl: './sign-in-form.component.html',
    styleUrls: [ './sign-in-form.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInFormComponent extends OnDestroyBase implements OnInit {
    private hidePassword: boolean = true;
    private signInForm: FormGroup;
    private loading: boolean = false;
    private messageError: string;

    get HidePassword(): boolean {
        return this.hidePassword;
    }

    get SignInForm(): FormGroup {
        return this.signInForm;
    }

    get Loading(): boolean {
        return this.loading;
    }

    get LoginControl(): AbstractControl {
        return this.signInForm.get(SignInFormControlName.LOGIN);
    }

    get PasswordControl(): AbstractControl {
        return this.signInForm.get(SignInFormControlName.PASSWORD);
    }

    get MessageError(): string {
        return this.messageError;
    }

    constructor(
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly authenticationFacade: AuthenticationFacade
    ) {
        super();
    }

    /**
     * Инициализация
     */
    public ngOnInit(): void {
        this.signInForm = this.authenticationFacade.getSignInForm();
    }

    /**
     * Метод переключения флага видимости пароля
     */
    public toggleHidePassword(): void {
        this.hidePassword = !this.hidePassword;
    }

    /**
     * Метод входа в систему
     */
    public signIn(): void {
        if (this.authenticationFacade.verifySignInForm(this.signInForm)) {
            const login: string = this.signInForm.get(SignInFormControlName.LOGIN).value;
            const password: string = this.signInForm.get(SignInFormControlName.PASSWORD).value;

            this.loading = true;
            this.messageError = null;
            this.authenticationFacade.signIn(login, password)
                .pipe(
                    catchError((error: HttpErrorResponse) => {
                        console.error(ErrorCode.R001);

                        this.messageError = this.authenticationFacade.getSignInMessageError(error.status);

                        return of(error);
                    }),
                    takeUntil(this.destroy$)
                )
                .subscribe(() => {
                    this.loading = false;
                    this.changeDetectorRef.detectChanges();
                });
        }
    }
}