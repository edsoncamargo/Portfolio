import { Component, OnInit } from '@angular/core';

// Models
import { Timeline } from 'src/app/models/timeline';

// Services
import { TimelineService } from 'src/app/services/database/dao/timeline/timeline.service';

@Component({
  selector: 'app-admin-timeline',
  templateUrl: './admin-timeline.component.html',
  styleUrls: ['./admin-timeline.component.scss']
})
export class AdminTimelineComponent implements OnInit {

  // Timeline
  date: string = null;
  dateEn: string = null;
  company: string = null;
  companyEn: string = null;
  description: string = null;
  descriptionEn: string = null;
  fullPath: string = null;
  url: string = null;
  id: string = null;
  timeline: Timeline = null;
  timelines: Array<Timeline> = [];

  // Loadings
  loading: boolean = true;

  // Modal
  isEdit: boolean = false;
  modalTitle: string = "Adicionar experiência";

  constructor(private timelineDaoService: TimelineService) { }

  ngOnInit() {
    this.list();
  }

  changeModal(isEdit: boolean) {
    this.isEdit = isEdit;

    if (isEdit == true) {
      this.modalTitle = "Editar experiência";
    } else {
      this.modalTitle = "Adicionar experiência";
    }
  }

  add() {
    this.timeline = new Timeline(this.date, this.dateEn, this.company, this.companyEn, this.description, this.descriptionEn, this.fullPath, this.url, this.id);
    this.timelineDaoService.add(this.timeline);
  }

  list() {
    this.timelineDaoService.list((timelines) => {
      this.timelines = timelines;
      this.loading = false;
    });
  }

  getExperience(id: string) {
    this.timelineDaoService.get(id, ((timeline: Timeline) => {
      this.date = timeline.date;
      this.dateEn = timeline.dateEn;
      this.company = timeline.company;
      this.companyEn = timeline.companyEn;
      this.description = timeline.description;
      this.descriptionEn = timeline.descriptionEn;
      this.fullPath = timeline.fullPath;
      this.url = timeline.url;
      this.id = id;
    }));
  }

  edit() {
    this.timeline = new Timeline(this.date, this.dateEn, this.company, this.companyEn, this.description, this.descriptionEn, this.fullPath, this.url, this.id);
    this.timelineDaoService.edit(this.timeline);
  }

  delete() {

  }

}
