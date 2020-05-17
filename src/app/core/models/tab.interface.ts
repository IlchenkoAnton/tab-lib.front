import { TMoment } from '../../common';


/**
 * Интерфейс объекта таба (закладки)
 */
export interface ITab {
    /** Идентификатор */
    Id: string;

    /** Ссылка */
    Link: string;

    /** Дата создания */
    DateCreation: TMoment;

    /** Название */
    Name: string;

    /** Описание */
    Description?: string;
}