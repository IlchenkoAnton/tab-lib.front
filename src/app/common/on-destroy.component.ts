import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Обработка хука OnDestroy компонента
 */
export abstract class OnDestroyComponent implements OnDestroy {
    protected destroy$: Subject<boolean> = new Subject<boolean>();

    /**
     * Уничтожение компонента
     */
    public ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}