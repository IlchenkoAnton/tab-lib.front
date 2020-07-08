import { Moment } from 'moment';

/**
 * Тип для объекта Moment
 */
export type TMoment = Moment;

/**
 * Тип для состояния запроса
 */
export type TRequestStatus = {
    /** */
    isLoading?: boolean;

    /** */
    isError?: boolean;
};

export type LoginData = {
    login: string;
    password: string;
};