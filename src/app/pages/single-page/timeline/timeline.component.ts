import { Component, OnInit } from '@angular/core';

// Models
import { Timeline } from 'src/app/models/timeline';

// Services
import { TimelineService } from 'src/app/services/database/dao/timeline/timeline.service';
import { LocalStorageService } from './../../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  timelines: Array<Timeline> = [];

  loading = true;

  language: string = null;

  constructor(private timelineDaoService: TimelineService,
    private storage: LocalStorageService) { }

  ngOnInit() {
    this.list();
  }

  getLanguage() {
    return this.storage.getLanguage();
  }

  list() {
    this.timelineDaoService.list((timelines: Array<Timeline>) => {
      this.timelines = timelines;
      this.loading = false;
    });
  }

}
