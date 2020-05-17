/**
 * DTO для списка табов (вкладок)
 */
export class TabLibResponseDto {
    /** Идентификатор */
    public id: string;

    /** Ссылка */
    public link: string;

    /** Дата создания */
    public dateCreation: string;

    /** Название */
    public name: string;

    /** Описание */
    public description: string;
}