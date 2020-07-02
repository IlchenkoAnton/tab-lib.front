import { IUser } from './user.interface';

export class User implements IUser {
    constructor(
        private readonly id: string,
        private readonly name: string,
        private readonly token: string
    ) {}

    get Id(): string {
        return this.id;
    }

    get Name(): string {
        return this.name;
    }

    get Token(): string {
        return this.token;
    }
}