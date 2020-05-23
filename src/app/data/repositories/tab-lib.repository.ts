import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { TMoment } from '@common';
import { ITab, Tab } from '@core/models';
import { ApiService } from '../api.service';
import { TabLibResponseDto } from '../dto';


/**
 * Репозиторий по работе с API табов (вкладок)
 */
@Injectable()
export class TabLibRepository {
    constructor(
        private readonly httpClient: HttpClient,
        private readonly apiGatewayService: ApiService
    ) {}

    /**
     * Метод запроса списка табов (вкладок)
     * @parma userId - Идентификатор пользователя
     */
    public getTabList(userId: string): Observable<ITab[]> {
        const url: string = this.apiGatewayService.tabList();
        const params: HttpParams = new HttpParams()
            .set('userId', userId);

        return this.httpClient.get<TabLibResponseDto[]>(url, { params })
            .pipe(
                map((data: TabLibResponseDto[]) => {
                    return data.map((item: TabLibResponseDto) => {
                        const dateCreation: TMoment = moment(item.dateCreation);

                        return new Tab(item.id, item.link, dateCreation, item.name, item.description);
                    })
                })
            );
    }
}