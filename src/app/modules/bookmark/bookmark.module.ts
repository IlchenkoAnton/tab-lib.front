import { NgModule, ModuleWithProviders } from '@angular/core';

import { BookmarkConfig, BOOKMARK_API } from './bookmark-config';

@NgModule()
export class BookmarkModule {
    static forRoot(config: BookmarkConfig): ModuleWithProviders {
        return {
            ngModule: BookmarkModule,
            providers: [
                {
                    provide: BOOKMARK_API,
                    useValue: config.apiService
                }
            ]
        };
    }
}