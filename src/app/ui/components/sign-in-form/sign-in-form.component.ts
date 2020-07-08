import { Component, ChangeDetectionStrategy, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginData } from '@common';
import { faEye, faEyeSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

enum FormFiledName {
    LOGIN = 'login',
    PASSWORD = 'possword'
};

@Component({
    selector: 'tl-sign-in-form',
    templateUrl: './sign-in-form.component.html',
    styleUrls: [ './sign-in-form.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInFormComponent implements OnInit {
    private formGroup: FormGroup;
    private passwordInputType = 'password';
    private isLoading: boolean;

    @Input()
    set IsLoading(value: boolean) {
        this.isLoading = value;
    }

    get IsLoading(): boolean {
        return this.isLoading;
    }

    @Output()
    public SignIn: EventEmitter<LoginData> = new EventEmitter<LoginData>();

    get FormGroup(): FormGroup {
        return this.formGroup;
    }

    set PasswordInputType(value: string) {
        this.passwordInputType = value;
    }

    get PasswordInputType(): string {
        return this.passwordInputType;
    }

    get FiledName(): typeof FormFiledName {
        return FormFiledName;
    }

    get FaEye(): IconDefinition {
        return faEye;
    }

    get FaEyeSlash(): IconDefinition {
        return faEyeSlash;
    }

    public ngOnInit(): void {
        this.initFormGroup();
    }

    public submit(): void {
        if (!this.formGroup.invalid) {
            this.SignIn.emit(this.formGroup.value);
        } else {
            for (const key in this.formGroup.controls) {
                this.formGroup.controls[key].markAsTouched();   
            }
        }
    }

    private initFormGroup(): void {
        this.formGroup = new FormGroup({
            [ FormFiledName.LOGIN ]: new FormControl(null, [ Validators.required, Validators.email ]),
            [ FormFiledName.PASSWORD ]: new FormControl(null, [ Validators.required ]),
        });
    }
}