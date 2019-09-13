import { Pipe, PipeTransform } from '@angular/core';
import { SkillClasses } from 'src/app/models/skill-classes';

@Pipe({
  name: 'skillColors'
})
export class SkillColorsPipe implements PipeTransform {

  activeColor: any = "";

  transform(classes: SkillClasses): any {
    return this.activeColor = `${classes.color}`;
  }

}
