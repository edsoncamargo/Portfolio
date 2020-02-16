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
    console.log(timeline);
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
        if (timeline.fullPath) {
          this.storage.getCompanyPic(timeline.fullPath, (url: string) => {
            timeline.url = url;
            this.updateToID(id, timeline);
          });
        } else {
          this.updateToID(id, timeline);
        }
      });
    });
  }

  private updateToID(id: string, timeline: Timeline) {
    timeline.id = id;
    this.edit(timeline);
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
      if (data === null) {
        onResolve(timelines);
      }
      for (const id in data) {
        if (data.hasOwnProperty(id)) {
          timelines.push(data[id]);
          if (timelines.length >= Object.keys(data).length) {
            onResolve(timelines);
          }
        }
      }
    });
  }

  get(id: string, onResolve: any) {
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

  updateCompanyPic(timeline: Timeline, files: File) {
    if (timeline.fullPath) {
      this.storage.deleteCompanyPic(timeline.fullPath).then(() => {
        this.storage.addCompanyPic(files, timeline.id, (response: any) => {
          timeline.fullPath = response.metadata.fullPath;
          this.storage.getCompanyPic(timeline.fullPath, (url: string) => {
            timeline.url = url;
            this.updateToID(timeline.id, timeline);
            this.edit(timeline);
          });
        });
      });
    } else {
      this.storage.addCompanyPic(files, timeline.id, (response: any) => {
        timeline.fullPath = response.metadata.fullPath;
        this.storage.getCompanyPic(timeline.fullPath, (url: string) => {
          timeline.url = url;
          this.updateToID(timeline.id, timeline);
          this.edit(timeline);
        });
      });
    }
  }

  delete(id: string, timeline: Timeline) {
    const fullPath = timeline.fullPath;
    this.db.database().child(this.TIMELINE).child(id).remove().then(() => {
      if (fullPath !== null || fullPath !== '' || fullPath !== undefined) {
        this.storage.deleteCompanyPic(fullPath).then((response) => {
          return true;
        }).catch((err) => {
          console.log(err);
        });
      } else {
        return true;
      }
    });
  }

}
