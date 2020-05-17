/**
 * DTO для запроса логина
 */
export class LoginRequestDto {
    constructor(
        public name: string,
        public password: string
    ) {}
}