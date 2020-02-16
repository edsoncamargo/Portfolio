import { Injectable } from '@angular/core';

// Models
import { AboutMe } from '../../../../models/about-me';

// Services
import { ConnectionUtilsService } from '../../utils/connection-utils.service';

@Injectable({
  providedIn: 'root'
})

export class AboutDaoService {

  // Paths
  ABOUT = 'about/';
  BR = 'br/';
  EN = 'en/';

  constructor(private db: ConnectionUtilsService) { }

  // About me
  setAboutMe(aboutMeBR: AboutMe, aboutMeEN: AboutMe) {
    // Setting portuguese
    this.db.database().child(this.ABOUT).child(this.BR).update({
      title: aboutMeBR.title,
      description: aboutMeBR.description
    });

    // Setting english
    this.db.database().child(this.ABOUT).child(this.EN).update({
      title: aboutMeEN.title,
      description: aboutMeEN.description
    });
  }

  setFullPath(fullPath: string) {
    this.db.database().child(this.ABOUT).child(this.BR).update({
      path: fullPath
    });

    this.db.database().child(this.ABOUT).child(this.EN).update({
      path: fullPath
    });
  }

  getAboutMe(onResolve: any) {
    this.db.database().child(this.ABOUT).on('value', (snapshot) => {
      const data = snapshot.val();
      onResolve(data);
    });
  }

  getFullPath(onResolve: any) {
    this.db.database().child(this.ABOUT).child(this.BR).on('value', (snapshot) => {
      const data = snapshot.val();
      onResolve(data.path);
    });
  }
  // About me

}
