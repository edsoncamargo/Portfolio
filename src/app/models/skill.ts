import { SkillClasses } from './skill-classes';

export class Skill {

    private _skill: string;
    private _value: any;
    private _id: string;
    private _classes: SkillClasses

    constructor(skill: string, value: any, id?: string, classes?: SkillClasses) {
        this._skill = skill;
        this._value = value;
        this._id = id;
        this._classes = classes;
    }

    /**
     * Getter skill
     * @return {string}
     */
    public get skill(): string {
        return this._skill;
    }

    /**
     * Getter value
     * @return {any}
     */
    public get value(): any {
        return this._value;
    }

    /**
     * Getter id
     * @return {string}
     */
    public get id(): string {
        return this._id;
    }

    /**
    * Getter classes
    * @return {string}
    */
    public get classes(): SkillClasses {
        return this._classes;
    }

    /**
     * Setter skill
     * @param {string} value
     */
    public set skill(value: string) {
        this._skill = value;
    }

    /**
     * Setter value
     * @param {any} value
     */
    public set value(value: any) {
        this._value = value;
    }

    /**
     * Setter id
     * @param {string} value
     */
    public set id(value: string) {
        this._id = value;
    }

    /**
        * Setter classes
        * @param {string} value
        */
    public set classes(value: SkillClasses) {
        this._classes = value;
    }

}