import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { takeUntil, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { SignInFormBaseService } from '../../core/sign-in-form-base.service';
import { SignInFormService, SignInControlName } from '../../core/sign-in-form.service';
import { AuthenticationBaseService } from '../../core/authentication-base.service';
import { OnDestroyComponent, ErrorCode } from '../../../../core';

/**
 * Компонент формы авторизации
 */
@Component({
    selector: 'tl-sign-in-form',
    templateUrl: './sign-in-form.component.html',
    styleUrls: [ './sign-in-form.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: SignInFormBaseService,
            useClass: SignInFormService
        }
    ]
})
export class SignInFormComponent extends OnDestroyComponent implements OnInit {
    private hidePassword: boolean = true;
    private signInForm: FormGroup;
    private loading: boolean = false;

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
        return this.signInForm.get(SignInControlName.LOGIN);
    }

    get PasswordControl(): AbstractControl {
        return this.signInForm.get(SignInControlName.PASSWORD);
    }

    constructor(
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly signInFormService: SignInFormBaseService,
        private readonly authenticationService: AuthenticationBaseService
    ) {
        super();
    }

    /**
     * Инициализация
     */
    public ngOnInit(): void {
        this.signInForm = this.signInFormService.getForm();
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
        if (this.signInFormService.verifyForm(this.signInForm)) {
            const login: string = this.signInForm.get(SignInControlName.LOGIN).value;
            const password: string = this.signInForm.get(SignInControlName.PASSWORD).value;

            this.loading = true;
            this.authenticationService.signIn(login, password)
                .pipe(
                    tap(() => {
                        this.authenticationService.redirectToAuthorizedZone();
                    }),
                    catchError((error: any) => {
                        console.error(ErrorCode.R001);

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