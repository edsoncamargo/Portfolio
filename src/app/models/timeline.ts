export class Timeline {

    private _date: string;
    private _dateEn: string;
    private _company: string;
    private _companyEn: string;
    private _description: string;
    private _descriptionEn: string;
    private _fullPath: string;
    private _url: string;
    private _id: string;

    constructor(date: string, dateEn: string, company: string, companyEn: string,
        description: string, descriptionEn: string, fullPath?: string, url?: string, id?: string) {
        this._date = date;
        this.dateEn = dateEn;
        this._company = company;
        this.companyEn = companyEn;
        this._description = description;
        this.descriptionEn = descriptionEn;
        this._fullPath = fullPath;
        this._url = url;
        this._id = id;
    }

    parse() {
        if (this.fullPath === undefined || this.url === null) {
            this.fullPath = '';
        }

        if (this.url === undefined || this.url === null) {
            this.url = '';
        }

        if (this.id === undefined || this.url === null) {
            this.id = '';
        }
    }

    /**
     * Getter date
     * @return {string}
     */
    public get date(): string {
        return this._date;
    }

    /**
     * Getter dateEn
     * @return {string}
     */
    public get dateEn(): string {
        return this._dateEn;
    }

    /**
     * Getter company
     * @return {string}
     */
    public get company(): string {
        return this._company;
    }

    /**
     * Getter companyEn
     * @return {string}
     */
    public get companyEn(): string {
        return this._companyEn;
    }

    /**
     * Getter description
     * @return {string}
     */
    public get description(): string {
        return this._description;
    }

    /**
     * Getter descriptionEn
     * @return {string}
     */
    public get descriptionEn(): string {
        return this._descriptionEn;
    }

    /**
     * Getter fullPath
     * @return {string}
     */
    public get fullPath(): string {
        return this._fullPath;
    }

    /**
     * Getter url
     * @return {string}
     */
    public get url(): string {
        return this._url;
    }

    /**
     * Getter id
     * @return {string}
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Setter date
     * @param {string} value
     */
    public set date(value: string) {
        this._date = value;
    }

    /**
     * Setter dateEn
     * @param {string} value
     */
    public set dateEn(value: string) {
        this._dateEn = value;
    }

    /**
     * Setter company
     * @param {string} value
     */
    public set company(value: string) {
        this._company = value;
    }

    /**
     * Setter companyEn
     * @param {string} value
     */
    public set companyEn(value: string) {
        this._companyEn = value;
    }

    /**
     * Setter description
     * @param {string} value
     */
    public set description(value: string) {
        this._description = value;
    }

    /**
     * Setter descriptionEn
     * @param {string} value
     */
    public set descriptionEn(value: string) {
        this._descriptionEn = value;
    }

    /**
     * Setter fullPath
     * @param {string} value
     */
    public set fullPath(value: string) {
        this._fullPath = value;
    }

    /**
     * Setter url
     * @param {string} value
     */
    public set url(value: string) {
        this._url = value;
    }

    /**
     * Setter id
     * @param {string} value
     */
    public set id(value: string) {
        this._id = value;
    }

}
