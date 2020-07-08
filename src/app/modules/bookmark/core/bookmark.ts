import { IBookmark } from './bookmark.interface';

export class Bookmark implements IBookmark {
    constructor(
        private readonly id: string,
        private readonly link: string
    ) {}

    get Id(): string {
        return this.id;
    }

    get Link(): string {
        return this.link;
    }

}