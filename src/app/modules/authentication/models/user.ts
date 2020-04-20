import { IUser } from './user.interface';

/**
 * //
 */
export class User implements IUser {
    constructor(
        private readonly id: string,
        private readonly name: string
    ) {}

    get Id(): string {
        return this.id;
    }

    get Name(): string {
        return this.name;
    }
}