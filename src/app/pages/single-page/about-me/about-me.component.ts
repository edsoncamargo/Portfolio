import { Component, OnInit } from '@angular/core';

// Services
import { LocalStorageService } from '../../../services/local-storage/local-storage.service';
import { AboutDaoService } from '../../../services/database/dao/about/about-dao.service';
import { AboutStorageService } from '../../../services/storage/about/about-storage.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  // Portuguese
  titleBR: string = "";
  descriptionBR: string = "";

  // English
  titleEN: string = "";
  descriptionEN: string = "";

  // Current language
  language: string = "";

  // Profile picture
  path: string = "";
  url: string = "";

  // Loading
  loading: boolean = false;

  constructor(private storage: LocalStorageService,
    private aboutDaoService: AboutDaoService,
    private aboutStorage: AboutStorageService) {
    this.getCurrentLanguage();
    this.get();

    this.showProfilePicture();
  }

  ngOnInit() { }

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
        if (language == "br") {
          this.titleBR = about[language]["title"];
          this.descriptionBR = about[language]["description"];
        } else {
          this.titleEN = about[language]["title"];
          this.descriptionEN = about[language]["description"];
        }
      }
    });
  }

  showProfilePicture() {
    this.aboutDaoService.getFullPath((path) => {
      this.aboutStorage.getProfilePic(path, (url) => {
        this.url = url;
        this.loading = false;
      });
    });
  }

}
