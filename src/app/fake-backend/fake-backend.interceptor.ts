import { Injectable, Provider } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HTTP_INTERCEPTORS,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { loginMock } from './login-mock';

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

            return of(new HttpResponse({ status: 200, body: loginMock }));
        }

        return next.handle(request);
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