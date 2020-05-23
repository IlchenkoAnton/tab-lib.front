import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TabLibRepository } from '@data/repositories';
import { ITab } from '@core/models';

/**
 * Сервис по работе с табами (вкладками)
 */
@Injectable()
export class TabLibService {
    constructor(
        private readonly tabLibRepository: TabLibRepository
    ) {}

    /**
     * Метод получения списка табов (вкладок)
     */
    public getTabList(userId: string): Observable<ITab[]> {
        return this.tabLibRepository.getTabList(userId);
    }
}