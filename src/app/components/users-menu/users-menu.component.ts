import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { OnDestroyComponent, ErrorCode } from '../../core';
import { AuthenticationBaseService, IUser } from '../../modules/authentication';

/**
 * Компонент меню пользователя
 */
@Component({
    selector: 'tl-users-menu',
    templateUrl: './users-menu.component.html',
    styleUrls: [ './users-menu.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersMenuComponent extends OnDestroyComponent implements OnInit {
    private user: IUser;

    get User(): IUser {
        return this.user;
    }

    constructor(
        private readonly authenticationService: AuthenticationBaseService
    ) {
        super();
    }

    /**
     * Инициализация компонента
     */
    public ngOnInit(): void {
        this.updateUser();
    }

    /**
     * Метод выхода из системы
     */
    public singOut(): void {
        this.authenticationService.signOut()
            .pipe(
                takeUntil(this.destroy$)
            )
            .subscribe(() => {
                this.authenticationService.redirectToNotAuthorizedZone();
            }, () => {
                console.error(ErrorCode.R002);
            });
    }

    /**
     * Метод обновления пользователя
     */
    private updateUser(): void {
        this.user = this.authenticationService.getUser();
    }
}