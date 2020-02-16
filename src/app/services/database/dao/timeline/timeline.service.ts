import { Injectable } from '@angular/core';

// Models
import { Timeline } from '../../../../models/timeline';

// Services
import { ConnectionUtilsService } from '../../utils/connection-utils.service';
import { TimelineStorageService } from './../../../storage/timeline/timeline-storage.service';

@Injectable({
  providedIn: 'root'
})

export class TimelineService {

  // Paths
  TIMELINE = 'timeline/';

  constructor(private db: ConnectionUtilsService, private storage: TimelineStorageService) { }

  add(timeline: Timeline, file: File): string | void {
    timeline.parse();
    const id = this.db.database().push().key;

    this.db.database().child(this.TIMELINE).child(id).set({
      'date': timeline.date,
      'dateEn': timeline.dateEn,
      'company': timeline.company,
      'companyEn': timeline.companyEn,
      'description': timeline.description,
      'descriptionEn': timeline.descriptionEn,
      'fullPath': timeline.fullPath,
      'url': timeline.url,
      'id': id
    }).then(() => {
      this.addCompanyPic(file, id, (response: any) => {
        timeline.fullPath = response.metadata.fullPath;
        timeline.id = id;
        this.edit(timeline);
      });
    });
  }

  addCompanyPic(file: File, id: string, onResolve: any): void {
    this.storage.addCompanyPic(file, id, (response: any) => {
      onResolve(response);
    });
  }

  list(onResolve: any) {
    this.db.database().child(this.TIMELINE).on('value', (snapshot) => {
      const data: Array<Timeline> = snapshot.val();
      const timelines: Array<Timeline> = [];
      for (const id in data) {
        if (data.hasOwnProperty(id)) {
          if (data[id].fullPath) {
            this.storage.getCompanyPic(data[id].fullPath, (url: string) => {
              data[id].url = url;
            });
          }
          timelines.push(data[id]);
          if (timelines.length >= Object.keys(data).length) {
            onResolve(timelines);
          }
        }
      }
      onResolve(timelines);
    });
  }

  get(id: string, onResolve: any) {
    console.log('entrei');
    this.db.database().child(this.TIMELINE).child(id).on('value', (snapshot) => {
      const data = snapshot.val();
      const timeline: Timeline = data;
      if (timeline.fullPath) {
        this.storage.getCompanyPic(timeline.fullPath, (url: string) => {
          timeline.url = url;
          onResolve(timeline);
        });
      } else {
        onResolve(timeline);
      }
    });
  }

  edit(timeline: Timeline) {
    timeline.parse();
    console.log(timeline);
    this.db.database().child(this.TIMELINE).child(timeline.id).update({
      'date': timeline.date,
      'dateEn': timeline.dateEn,
      'company': timeline.company,
      'companyEn': timeline.companyEn,
      'description': timeline.description,
      'descriptionEn': timeline.descriptionEn,
      'fullPath': timeline.fullPath,
      'url': timeline.url
    });
  }

  delete(id: string) {
    this.db.database().child(this.TIMELINE).child(id).remove(onComplete => {
      return true;
    });
  }

}
