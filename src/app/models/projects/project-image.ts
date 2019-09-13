export class ProjectImage {

    private _fullPath: string;
    private _id: string;
    private _url: string;

    constructor(fullPath: string, id?: string, url?: string) {
        this._fullPath = fullPath;
        this._id = id;
        this._url = url;
    }

    /**
     * Getter fullPath
     * @return {string}
     */
    public get fullPath(): string {
        return this._fullPath;
    }

    /**
     * Getter id
     * @return {string}
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Getter url
     * @return {string}
     */
    public get url(): string {
        return this._url;
    }

    /**
     * Setter fullPath
     * @param {string} value
     */
    public set fullPath(value: string) {
        this._fullPath = value;
    }

    /**
     * Setter id
     * @param {string} value
     */
    public set id(value: string) {
        this._id = value;
    }

    /**
     * Setter url
     * @param {string} value
     */
    public set url(value: string) {
        this._url = value;
    }

}