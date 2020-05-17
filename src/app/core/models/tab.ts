import { TMoment } from '../../common';
import { ITab } from './tab.interface';

/**
 * Таб (закладка)
 */
export class Tab implements ITab {
    constructor(
        private readonly id: string,
        private readonly link: string,
        private readonly dateCreation: TMoment,
        private readonly name: string,
        private readonly description?: string
    ) {}

    get Id(): string {
        return this.id;
    }

    get Link(): string {
        return this.link;
    }

    get DateCreation(): TMoment {
        return this.dateCreation;
    }

    get Name(): string {
        return this.name;
    }

    get Description(): string {
        return this.description;
    }
}