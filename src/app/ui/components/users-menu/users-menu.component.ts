import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { OnDestroyAbstract } from '@common';
import { IUser } from '@core/models';
import { AuthenticationFacade } from '@facades';

/**
 * Компонент меню пользователя
 */
@Component({
    selector: 'tl-users-menu',
    templateUrl: './users-menu.component.html',
    styleUrls: [ './users-menu.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersMenuComponent extends OnDestroyAbstract implements OnInit {
    private user: IUser;

    get User(): IUser {
        return this.user;
    }

    constructor(
        private readonly authenticationFacade: AuthenticationFacade
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
        this.authenticationFacade.signOut()
            .pipe(
                takeUntil(this.destroy$)
            )
            .subscribe(() => {});
    }

    /**
     * Метод обновления пользователя
     */
    private updateUser(): void {
        this.user = this.authenticationFacade.getUser();
    }
}