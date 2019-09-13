import { Injectable } from '@angular/core';

// Models
import { Timeline } from '../../../../models/timeline';

// Services
import { ConnectionUtilsService } from '../../utils/connection-utils.service';

@Injectable({
  providedIn: 'root'
})

export class TimelineService {

  // Paths
  TIMELINE: string = "timeline/"

  constructor(private db: ConnectionUtilsService) { }

  add(timeline: Timeline) {
    timeline.parse();
    let id = this.db.database().push().key;

    this.db.database().child(this.TIMELINE).child(id).set({
      "date": timeline.date,
      "dateEn": timeline.dateEn,
      "company": timeline.company,
      "companyEn": timeline.companyEn,
      "description": timeline.description,
      "descriptionEn": timeline.descriptionEn,
      "fullPath": timeline.fullPath,
      "url": timeline.url,
      "id": id
    })
  }

  list(onResolve) {
    this.db.database().child(this.TIMELINE).on('value', (snapshot) => {
      let data: Array<Timeline> = snapshot.val();
      let timelines: Array<Timeline> = [];

      for (const id in data) {
        timelines.push(data[id]);

        if (timelines.length >= Object.keys(data).length) {
          onResolve(timelines);
        }
      }
    });
  }

  get(id: string, onResolve) {
    this.db.database().child(this.TIMELINE).child(id).on('value', (snapshot) => {
      let data = snapshot.val();
      let timeline: Timeline = data;
      onResolve(timeline);
    });
  }

  edit(timeline: Timeline) {
    timeline.parse();

    this.db.database().child(this.TIMELINE).child(timeline.id).update({
      "date": timeline.date,
      "dateEn": timeline.dateEn,
      "company": timeline.company,
      "companyEn": timeline.companyEn,
      "description": timeline.description,
      "descriptionEn": timeline.descriptionEn,
      "fullPath": timeline.fullPath,
      "url": timeline.url
    });
  }

  delete(id: string) {
    this.db.database().child(this.TIMELINE).child(id).remove(onComplete => {
      return true;
    });
  }

}
