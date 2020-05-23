import { Component, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';

import { TabLibFacade, AuthenticationFacade } from '@facades';
import { IUser } from '@core/models';

/**
 * Компонент страницы Рабочий стол
 */
@Component({
    selector: 'tl-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: [ './dashboard-page.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent implements OnInit, OnDestroy {
    constructor(
        private readonly authenticationFacade: AuthenticationFacade,
        private readonly tabLibFacade: TabLibFacade
    ) {}

    /**
     * //
     */
    public ngOnInit(): void {
        const user: IUser = this.authenticationFacade.getUser();

        this.tabLibFacade.updateModel(user.Id);
    }

    /**
     * //
     */
    public ngOnDestroy(): void {
        this.tabLibFacade.destroyUpdateModel();
    }
}