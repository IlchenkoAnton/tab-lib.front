import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SignInFormBaseService } from './sign-in-form-base.service';

/**
 * Назания полей формы
 */
export enum SignInControlName {
    LOGIN = 'login',
    PASSWORD = 'password'
};

/**
 * Сервис для работы с формой авторизации
 */
@Injectable()
export class SignInFormService implements SignInFormBaseService {
    /**
     * Метод получения объекта формы
     */
    public getForm(): FormGroup {
        return new FormGroup({
            [SignInControlName.LOGIN]: new FormControl('', [ Validators.required, Validators.email ]),
            [SignInControlName.PASSWORD]: new FormControl('', [ Validators.required ])
        });
    }

    /**
     * Метод проверки корректности формы
     * @param form - Объект формы
     */
    public verifyForm(form: FormGroup): boolean {
        if (form.invalid) {
            for (const controlName in form.controls) {
                form.get(controlName).markAsTouched();
            }

            return false;
        } else {
            return true;
        }
    }
}