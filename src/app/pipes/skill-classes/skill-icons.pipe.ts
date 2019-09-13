import { SkillClasses } from '../../models/skill-classes';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skillIcons'
})
export class SkillIconsPipe implements PipeTransform {

  activeClasses: any = {};

  transform(classes: SkillClasses): any {
    this.activeClasses = {};

    this.activeClasses[`${classes.class1}`] = true;
    this.activeClasses[`${classes.class2}`] = true;

    return this.activeClasses;
  }

}
