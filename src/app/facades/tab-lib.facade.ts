import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged, takeUntil, catchError, tap } from 'rxjs/operators';

import { TabLibService } from '@core/services';
import { TabLibStore, TabListState } from './tab-lib.store';
import { ITab } from '@core/models';
import { OnDestroyAbstract } from '@common';

/**
 * Фасад для работы со списком табов (закладок)
 */
@Injectable()
export class TabLibFacade extends OnDestroyAbstract {
    get Model$(): Observable<TabListState> {
        return this.tabLibStore.Model$
            .pipe(
                distinctUntilChanged()
            );
    }

    constructor(
        private readonly tabLibService: TabLibService,
        private readonly tabLibStore: TabLibStore
    ) {
        super();
    }

    /**
     * Метод обновления модели
     */
    public updateModel(userId: string): void {
        this.tabLibStore.setRequestStatus({
            isLoading: true,
            isError: false
        });

        this.tabLibService.getTabList(userId)
            .pipe(
                takeUntil(this.destroy$),
                tap(() => {
                    this.tabLibStore.setRequestStatus({
                        isLoading: false,
                        isError: false
                    });
                }),
                catchError(() => {
                    this.tabLibStore.setRequestStatus({
                        isLoading: false,
                        isError: true
                    });

                    return of([]);
                })
            )
            .subscribe((list: ITab[]) => {
                this.tabLibStore.setList(list);
            });
    }

    /**
     * Метод уничтожения потока обновления модели
     */
    public destroyUpdateModel(): void {
        this.ngOnDestroy();
    }
}