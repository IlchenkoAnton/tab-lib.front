import { FormGroup } from '@angular/forms';

/**
 * Базовый класс для сервиса по работе с формой авторизации
 */
export abstract class SignInFormBaseService {
    /**
     * Метод получения объекта формы
     */
    public abstract getForm(): FormGroup;

    /**
     * Метод проверки корректности формы
     * @param form - Объект формы
     */
    public abstract verifyForm(form: FormGroup): boolean;
}