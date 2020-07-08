import { InjectionToken } from '@angular/core';

import { IBookmarkApi } from './data/bookmark-api.interface';

export const BOOKMARK_API: InjectionToken<string> = new InjectionToken<string>('BookmarkApi');

export type BookmarkConfig = {
    apiService: IBookmarkApi
};