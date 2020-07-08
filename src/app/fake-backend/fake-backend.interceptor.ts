import { Injectable, Provider } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HTTP_INTERCEPTORS,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError, timer } from 'rxjs';
import { switchMap, mapTo } from 'rxjs/operators';

import { loginMock } from './login-mock';
import { tabListMock } from './tab-list-mock';

/**
 * Перехватчик запросов к API для имитации бэкэнда
 */
@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    /**
     * Перехватчик запросов
     */
    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

        // Авторизация
        if (request.method === 'POST' && request.url.includes('/login')) {
            if (request.body.name.includes('error')) {
                return throwError(new HttpErrorResponse({
                    status: 403
                }));
            }

            return timer(1000).pipe(
                mapTo(new HttpResponse({ status: 200, body: loginMock }))
            );
        }

        // Выход из системы
        if (request.method === 'GET' && request.url.includes('/logout')) {
            return timer(1000).pipe(
                mapTo(new HttpResponse({ status: 200 }))
            );
        }

        // Получить список табов (вкладок)
        if (request.method === 'GET' && request.url.includes('/tab-list')) {
            return timer(2000)
                .pipe(
                    switchMap(() => of(new HttpResponse({ status: 200, body: tabListMock }))),
                    //switchMap(() => throwError(new HttpErrorResponse({ status: 500 })))
                );
        }

        return next.handle(request);
    }

    private getResponse(value: any): Observable<any> {
        return timer(1000).pipe(
            mapTo(value)
        );
    }
}

/**
 * Служба имитации бэекенда
 */
export const fakeBackendProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};