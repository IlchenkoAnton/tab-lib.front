import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ITab } from '@core/models';

/**
 * //
 */
@Component({
    selector: 'tl-tab-info',
    templateUrl: './tab-info.component.html',
    styleUrls: [ './tab-info.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabInfoComponent {
    private tab: ITab;

    @Input()
    set Tab(value: ITab) {
        this.tab = value;
    }

    get Tab(): ITab {
        return this.tab;
    }
}