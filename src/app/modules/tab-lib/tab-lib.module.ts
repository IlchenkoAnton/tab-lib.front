import { NgModule } from '@angular/core';

import { TabLibRepository } from './data/tab-lib.repository';
import { TabLibBaseRepository } from './core/tab-lib-base.repository';
import { TabLibBaseService } from './core/tab-lib-base.service';
import { TabLibService } from './core/tab-lib.service';

/**
 * //
 */
@NgModule({
    imports: [],
    providers: [
        {
            provide: TabLibBaseRepository,
            useClass: TabLibRepository
        },
        {
            provide: TabLibBaseService,
            useClass: TabLibService
        }
    ]
})
export class TabLibModule {}
