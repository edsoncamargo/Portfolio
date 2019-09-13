import { Injectable } from '@angular/core';

// Models
import { Skill } from 'src/app/models/skill';

// Services
import { ConnectionUtilsService } from '../../utils/connection-utils.service';

@Injectable({
  providedIn: 'root'
})

export class SkillsService {

  // Paths
  SKILLS: string = "skills/";

  id: string = undefined;

  constructor(private db: ConnectionUtilsService) { }

  // Skills
  addSkill(skill: Skill) {
    // Unique id
    let id = this.db.database().push().key;

    // Adding skill to the database
    this.db.database().child(this.SKILLS).child(id).set({
      skill: skill.skill,
      value: skill.value,
      id: id,
      classes: {
        "color": `${skill.classes.color}`,
        "class1": `${skill.classes.class1}`,
        "class2": `${skill.classes.class2}`
      }
    });
  }

  listSkills(onResolve) {
    this.db.database().child(this.SKILLS).on('value', (snapshot) => {
      let skills: Array<Skill> = [];
      let data = snapshot.val();

      for (const id in data) {
        skills.push(data[id]);
      }

      onResolve(skills);
    });
  }

  updateSkill(skill: Skill) {
    this.db.database().child(this.SKILLS).child(skill.id).update({
      skill: skill.skill,
      value: skill.value,
      id: skill.id,
      classes: {
        "color": `${skill.classes.color}`,
        "class1": `${skill.classes.class1}`,
        "class2": `${skill.classes.class2}`
      }
    });
  }

  getSkill(id: string, onResolve) {
    this.id = id;
    this.db.database().child(this.SKILLS).on('value', (snapshot) => {
      let skills = snapshot.val();
      for (const id in skills) {
        if (this.id == id) {
          onResolve(skills[id]);
        }
      }
    })
  }

  deleteSkill(id: string) {
    this.db.database().child(this.SKILLS).child(id).remove();
  }
  // Skills

}
