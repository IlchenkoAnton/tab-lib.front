/**
 * Конфигурация модуля авторизации
 */
export type AuthenticationConfig = {
    /** Маршрут неавторизованной зоны */
    notAuthorizedZone: string[],

    /** Маршрут авторизованной зоны */
    authorizedZone: string[]
}