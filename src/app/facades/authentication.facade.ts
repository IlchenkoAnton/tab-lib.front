import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { IUser } from '../core/models';
import { AuthenticationService } from '../core/services';
import { ErrorCode } from '../core/enums';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Назания полей формы
 */
export enum SignInFormControlName {
    LOGIN = 'login',
    PASSWORD = 'password'
};

/**
 * //
 */
@Injectable()
export class AuthenticationFacade {
    constructor(
        private readonly authenticationService: AuthenticationService
    ) {}

    /**
     * //
     */
    public getUser(): IUser {
        try {
            return this.authenticationService.getUser();
        } catch (error) {
            console.log(error);

            this.authenticationService.redirectToNotAuthorizedZone();
        }
    }

    /**
     * //
     * @param name - Имя пользователя
     * @param password - Пароль пользователя
     */
    public signIn(name: string, password: string): Observable<void> {
        return this.authenticationService.signIn(name, password)
            .pipe(
                tap(() => {
                    this.authenticationService.redirectToAuthorizedZone();
                })
            );
    }

    /**
     * //
     */
    public signOut(): Observable<void> {
        return this.authenticationService.signOut()
            .pipe(
                catchError((error) => {
                    console.error(ErrorCode.R002);

                    return throwError(error);
                }),
                tap(() => {
                    this.authenticationService.redirectToNotAuthorizedZone();
                })
            );
    }

    /**
     * Метод получения объекта формы
     */
    public getSignInForm(): FormGroup {
        return new FormGroup({
            [ SignInFormControlName.LOGIN ]: new FormControl('', [ Validators.required, Validators.email ]),
            [ SignInFormControlName.PASSWORD ]: new FormControl('', [ Validators.required ])
        });
    }

    /**
     * Метод проверки корректности формы
     * @param form - Объект формы
     */
    public verifySignInForm(form: FormGroup): boolean {
        if (form.invalid) {
            for (const controlName in form.controls) {
                form.get(controlName).markAsTouched();
            }

            return false;
        } else {
            return true;
        }
    }

    /**
     * Метод получения сообщения об ошибке
     * @param errorCode - Код ошибки
     */
    public getSignInMessageError(errorCode: number): string {
        switch (errorCode) {    
            case 403:
                return 'Не удалось распознать комбинацию логин / пароль';
            default:
                return 'Не удалось авторизоваться. Попробуйте позднее';
        }
    }
}