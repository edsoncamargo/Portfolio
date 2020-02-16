import { Component, OnInit, DoCheck } from '@angular/core';

// Services
import { LocalStorageService } from '../../../services/local-storage/local-storage.service';
import { AboutDaoService } from '../../../services/database/dao/about/about-dao.service';
import { AboutStorageService } from '../../../services/storage/about/about-storage.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements DoCheck {

  // Portuguese
  titleBR = '';
  descriptionBR = '';

  // English
  titleEN = '';
  descriptionEN = '';

  // Current language
  language = '';

  // Profile picture
  path = '';
  url = '';

  // Loading
  loading = false;
  loadingPicture = false;

  constructor(private storage: LocalStorageService,
    private aboutDaoService: AboutDaoService,
    private aboutStorage: AboutStorageService) {
    this.getCurrentLanguage();
    this.get();

    this.showProfilePicture();
  }

  ngDoCheck(): void {
    this.language = this.storage.getLanguage();
  }

  getCurrentLanguage() {
    this.language = this.storage.getLanguage();
  }

  get() {
    this.loading = true;
    this.aboutDaoService.getAboutMe((about: any) => {
      for (const language in about) {
        if (language === 'br') {
          this.titleBR = about[language]['title'];
          this.descriptionBR = about[language]['description'];
        } else {
          this.titleEN = about[language]['title'];
          this.descriptionEN = about[language]['description'];
        }
      }
      this.loading = false;
    });
  }

  showProfilePicture() {
    this.loadingPicture = true;
    this.aboutDaoService.getFullPath((path: string) => {
      this.aboutStorage.getProfilePic(path, (url: string) => {
        this.url = url;
        this.loadingPicture = false;
      });
    });
  }

}
