import { Component, OnInit } from '@angular/core';

// Models
import { AboutMe } from '../../../models/about-me';

// Services
import { AboutDaoService } from '../../../services/database/dao/about/about-dao.service';
import { AboutStorageService } from '../../../services/storage/about/about-storage.service';
import { LocalStorageService } from './../../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.scss']
})

export class AdminAboutComponent implements OnInit {

  // About me
  activeEdition = false;

  // Portuguese
  titleBR = '';
  descriptionBR = '';

  // English
  titleEN = '';
  descriptionEN = '';

  // About object
  aboutMeBR: AboutMe = null;
  aboutMeEN: AboutMe = null;
  // About me

  // About storage
  fileToUpload: File = null;
  fileName = '';
  fileSuccess: any = null;

  path = '';
  url = '';
  // About storage

  // Current language
  language = '';

  // Loadings
  loading = true;

  constructor(private aboutDaoService: AboutDaoService,
    private aboutStorage: AboutStorageService) {
    this.getAboutMe();
  }

  ngOnInit() {
    this.showProfilePic();
  }

  // About me
  getAboutMe() {
    this.aboutDaoService.getAboutMe((about: any) => {
      for (const language in about) {
        if (language === 'br') {
          this.titleBR = about[language]['title'];
          this.descriptionBR = about[language]['description'];
        }
      }
      this.loading = false;
    });
  }

  activeAboutEdit() {
    if (this.activeEdition === true) {
      this.activeEdition = false;
    } else {
      this.activeEdition = true;
    }
  }

  updateAboutMe() {
    // Portuguese
    this.aboutMeBR = new AboutMe(this.titleBR, this.descriptionBR);

    // English
    this.aboutMeEN = new AboutMe(this.titleEN, this.descriptionEN);

    // Updating database
    this.aboutDaoService.setAboutMe(this.aboutMeBR, this.aboutMeEN);

    // Updating profile pic
    if (this.fileToUpload) {
      this.uploadFileToActivity();
    }
  }


  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.fileName = this.fileToUpload.name;
  }

  uploadFileToActivity() {
    this.aboutStorage.addMyProfilePic(this.fileToUpload, (response: any) => {
      this.fileSuccess = response;
      this.aboutDaoService.setFullPath(this.fileSuccess.metadata.fullPath);
      this.showProfilePic();
    });
  }

  showProfilePic() {
    this.aboutDaoService.getFullPath((path: string) => {
      this.aboutStorage.getProfilePic(path, (url: string) => {
        this.url = url;
      });
    });
  }
  // About me

}
