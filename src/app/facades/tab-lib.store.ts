import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, asyncScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';

import { ITab } from '@core/models';
import { TRequestStatus } from '@common';

/**
 * Структура хранилища табов (вкладок)
 */
export type TabListState = {
    /** Список табов (вкладок) */
    list: ITab[]
} & TRequestStatus;

/**
 * Хранилище списка табов
 */
@Injectable()
export class TabLibStore {
    private state$: BehaviorSubject<TabListState> = new BehaviorSubject<TabListState>(null);
    private model$: Observable<TabListState>;

    get Model$(): Observable<TabListState> {
        return this.model$;
    }

    constructor() {
        this.model$ = this.state$.asObservable()
            .pipe(
                observeOn(asyncScheduler)
            );
    }

    /**
     * Метод установки списка табов (вкладок)
     * @parma list - Список
     */
    public setList(list: ITab[]): void {
        const payload: Partial<TabListState> = { list };

        this.updateState(payload);
    }

    /**
     * Метод установки влагов состояния запроса
     * @param requestStatus - Флаги
     */
    public setRequestStatus(requestStatus: TRequestStatus): void {
        const payload: Partial<TabListState> = requestStatus;

        this.updateState(payload);
    }

    // ///////////////
    // Закрытые методы
    // ///////////////

    /**
     * Метод обновления хранилища
     * @param payload - Новые значения
     */
    private updateState(payload: Partial<TabListState>): void {
        const currentState: TabListState = this.state$.getValue();

        this.state$.next({
            ...currentState,
            ...payload
        });
    }
}