import { Component, OnInit } from '@angular/core';

// Models
import { Skill } from '../../../models/skill';

// Services
import { SkillsService } from './../../../services/database/dao/skills/skills.service';

declare let $: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  // Skills
  skills: Array<Skill> = [];

  // Loading
  loading: boolean = false;

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.enableTooltip();
    this.listSkills();
  }

  enableTooltip() {
    $(document.body).tooltip({ selector: "[title]" });
  }

  listSkills() {
    this.loading = true;
    this.skillsService.listSkills((skills: Array<Skill>) => {
      this.skills = [];
      for (let skill of skills) {
        skill['percent'] = skill.value + "%";
        this.skills.push(skill);
      }

      this.skills.sort(function (a, b) {
        if (a.value < b.value) {
          return 1;
        }
        if (a.value > b.value) {
          return -1;
        }

        // a must be equal to b
        return 0;
      });

      this.loading = false;
    });
  }

}
