export class SkillClasses {

    private _color: string;
    private _class1: string;
    private _class2: string;

    constructor(color: string, class1: string, class2: string) {
        this._color = color;
        this._class1 = class1;
        this._class2 = class2;
    }

    /**
     * Getter color
     * @return {string}
     */
    public get color(): string {
        return this._color;
    }

    /**
     * Getter class1
     * @return {string}
     */
    public get class1(): string {
        return this._class1;
    }

    /**
     * Getter class2
     * @return {string}
     */
    public get class2(): string {
        return this._class2;
    }

    /**
     * Setter color
     * @param {string} value
     */
    public set color(value: string) {
        this._color = value;
    }

    /**
     * Setter class1
     * @param {string} value
     */
    public set class1(value: string) {
        this._class1 = value;
    }

    /**
     * Setter class2
     * @param {string} value
     */
    public set class2(value: string) {
        this._class2 = value;
    }

}