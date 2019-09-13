export class AboutMe {

    private _title: string;
    private _description: string;
    private _fullPath: string;

    constructor(title?: string, description?: string, fullPath?: string) {
        this._title = title;
        this._description = description;
        this._fullPath = fullPath;
    }

    /**
     * Getter title
     * @return {string}
     */
    public get title(): string {
        return this._title;
    }

    /**
     * Getter description
     * @return {string}
     */
    public get description(): string {
        return this._description;
    }

    /**
     * Getter fullPath
     * @return {string}
     */
    public get fullPath(): string {
        return this._fullPath;
    }

    /**
     * Setter title
     * @param {string} value
     */
    public set title(value: string) {
        this._title = value;
    }

    /**
     * Setter description
     * @param {string} value
     */
    public set description(value: string) {
        this._description = value;
    }

    /**
     * Setter fullPath
     * @param {string} value
     */
    public set fullPath(value: string) {
        this._fullPath = value;
    }

}