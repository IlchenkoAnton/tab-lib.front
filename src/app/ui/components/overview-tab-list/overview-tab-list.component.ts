import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { TabLibFacade, TabListState } from '@facades';
import { Observable } from 'rxjs';

/**
 * //
 */
@Component({
    selector: 'tl-overview-tab-list',
    templateUrl: './overview-tab-list.component.html',
    styleUrls: [ './overview-tab-list.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewTabListComponent implements OnInit {
    private model$: Observable<TabListState>;

    get Model$(): Observable<TabListState> {
        return this.model$;
    }

    constructor(
        private readonly tabLibFacade: TabLibFacade
    ) {}

    /**
     * //
     */
    public ngOnInit(): void {
        this.model$ = this.tabLibFacade.Model$;
    }
}