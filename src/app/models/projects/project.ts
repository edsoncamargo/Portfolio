import { ProjectImage } from "./project-image";

export class Project {

    private _title: string;
    private _description: string;
    private _url: string;
    private _fullPathCover: string;
    private _urlCover: string;
    private _id: string;
    private _images: Array<ProjectImage>;
    private _titleEn: string;
    private _descriptionEn: string;

    constructor(title: string, description: string, url?: string, fullPathCover?: string, id?: string, images?: Array<ProjectImage>, titleEn?: string, descriptionEn?: string, urlCover?: string) {
        this._title = title;
        this._description = description;
        this._url = url;
        this._fullPathCover = fullPathCover;
        this._urlCover = urlCover;
        this._id = id;
        this._images = images;
        this._titleEn = titleEn;
        this._descriptionEn = descriptionEn;
    }

    parse() {
        if (this.title == undefined) {
            this.title = null
        }

        if (this.description == undefined) {
            this.description = null;
        }

        if (this.url == undefined) {
            this.url = null;
        }

        if (this.fullPathCover == undefined) {
            this.fullPathCover = null;
        }

        if (this.id == undefined) {
            this.id = null;
        }

        if (this.titleEn == undefined) {
            this.titleEn = null;
        }

        if (this.descriptionEn == undefined) {
            this.descriptionEn = null;
        }

        if (this.urlCover == undefined) {
            this.urlCover = null;
        }
    }

    reset() {
        this.title = null
        this.description = null;
        this.url = null;
        this.fullPathCover = null;
        this.id = null;
        this.titleEn = null;
        this.descriptionEn = null;
        this.urlCover = null;
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
     * Getter url
     * @return {string}
     */
    public get url(): string {
        return this._url;
    }

    /**
     * Getter fullPathCover
     * @return {string}
     */
    public get fullPathCover(): string {
        return this._fullPathCover;
    }

    /**
     * Getter urlCover
     * @return {string}
     */
    public get urlCover(): string {
        return this._urlCover;
    }

    /**
     * Getter id
     * @return {string}
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Getter images
     * @return {Array<ProjectImage>}
     */
    public get images(): Array<ProjectImage> {
        return this._images;
    }

    /**
     * Getter titleEn
     * @return {string}
     */
    public get titleEn(): string {
        return this._titleEn;
    }

    /**
     * Getter descriptionEn
     * @return {string}
     */
    public get descriptionEn(): string {
        return this._descriptionEn;
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
     * Setter url
     * @param {string} value
     */
    public set url(value: string) {
        this._url = value;
    }

    /**
     * Setter fullPathCover
     * @param {string} value
     */
    public set fullPathCover(value: string) {
        this._fullPathCover = value;
    }

    /**
     * Setter urlCover
     * @param {string} value
     */
    public set urlCover(value: string) {
        this._urlCover = value;
    }

    /**
     * Setter id
     * @param {string} value
     */
    public set id(value: string) {
        this._id = value;
    }

    /**
     * Setter images
     * @param {Array<ProjectImage>} value
     */
    public set images(value: Array<ProjectImage>) {
        this._images = value;
    }

    /**
     * Setter titleEn
     * @param {string} value
     */
    public set titleEn(value: string) {
        this._titleEn = value;
    }

    /**
     * Setter descriptionEn
     * @param {string} value
     */
    public set descriptionEn(value: string) {
        this._descriptionEn = value;
    }

}