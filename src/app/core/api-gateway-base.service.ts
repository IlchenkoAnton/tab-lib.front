/**
 * Базовый класс для шлюза API
 */
export abstract class ApiGatewayBaseService {
    /**
     * Логин
     */
    public abstract login(): string;

    /**
     * Разлогин
     */
    public abstract logout(): string;
}