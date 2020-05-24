import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * //
 */
@Component({
    selector: 'tl-loading',
    templateUrl: './loading.component.html',
    styleUrls: [ './loading.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent {}