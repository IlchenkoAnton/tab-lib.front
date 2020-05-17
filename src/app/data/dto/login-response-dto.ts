/**
 * DTO для ответа на запрос авторизации пользователя
 */
export class LoginResponseDto {
    /**
     * Идентификатор пользователя
     */
    public userId: string;

    /**
     * Токен авторизации
     */
    public token: string;
}