import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';

import { TRequestStatus } from '@common';
import { LoadingComponent, ErrorComponent } from '@ui/components';

/**
 * Директива для отображения информации о состоянии запроса
 */
@Directive({
    selector: '[tlRequestStatus]'
})
export class RequestStatusDirective implements OnChanges {
    private requestStatus: TRequestStatus;

    @Input('tlRequestStatus')
    set RequestStatus(value: TRequestStatus) {
        this.requestStatus = value;
    }

    constructor(
        private readonly templateRef: TemplateRef<any>,
        private readonly viewContainerRef: ViewContainerRef,
        private readonly componentFactoryResolver: ComponentFactoryResolver
    ) {}

    public ngOnChanges(): void {
        this.viewContainerRef.clear();

        if (this.requestStatus && this.requestStatus.isError) {
            this.viewContainerRef.createComponent(this.createErrorComponent());
        } else if (this.requestStatus && this.requestStatus.isLoading) {
            this.viewContainerRef.createComponent(this.createLoadingComponent());
        } else {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }

    /**
     * Метод создания компонента для сообщения о загрузке
     */
    private createLoadingComponent(): ComponentFactory<LoadingComponent> {
        const component: ComponentFactory<LoadingComponent> = this.componentFactoryResolver
            .resolveComponentFactory<LoadingComponent>(LoadingComponent);

        return component;
    }

    /**
     * Метод создания компонента для сообщения об ошибки
     */
    private createErrorComponent(): ComponentFactory<ErrorComponent> {
        const component: ComponentFactory<ErrorComponent> = this.componentFactoryResolver
            .resolveComponentFactory<ErrorComponent>(ErrorComponent);

        return component;
    }
}