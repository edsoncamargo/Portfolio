import { Component, OnInit } from '@angular/core';

// Models
import { Skill } from 'src/app/models/skill';
import { SkillClasses } from 'src/app/models/skill-classes';

// Services
import { SkillsService } from './../../../services/database/dao/skills/skills.service';

@Component({
  selector: 'app-admin-skills',
  templateUrl: './admin-skills.component.html',
  styleUrls: ['./admin-skills.component.scss']
})

export class AdminSkillsComponent implements OnInit {

  // Skill
  // Skill object
  skill: Skill = null;

  // Skill variables
  skillName: string = "";
  value: any = null;
  id: string = undefined;
  classes: SkillClasses = null;
  color: string = "";
  classe1: string = "";
  classe2: string = "";
  skills: Array<Skill> = [];

  // Loading
  loading: boolean = true;
  // Skill

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.listSkills();
  }

  // Skills
  addSkill() {
    this.classes = new SkillClasses(this.color, this.classe1, this.classe2);
    this.skill = new Skill(this.skillName, this.value, this.id, this.classes);
    this.skillsService.addSkill(this.skill);
  }

  listSkills() {
    this.skillsService.listSkills((skills: Array<Skill>) => {
      this.skills = skills;
      this.loading = false;
    });
  }

  getSkill(id: string) {
    this.skillsService.getSkill(id, (skill: Skill) => {
      this.skillName = skill.skill;
      this.value = skill.value;
      this.id = skill.id;
      this.color = skill.classes.color;
      this.classe1 = skill.classes.class1;
      this.classe2 = skill.classes.class2;
    });
  }

  updateSkill() {
    this.classes = new SkillClasses(this.color, this.classe1, this.classe2);
    this.skill = new Skill(this.skillName, this.value, this.id, this.classes);
    this.skillsService.updateSkill(this.skill);
  }

  deleteSkill() {
    this.skillsService.deleteSkill(this.id);
  }

}

