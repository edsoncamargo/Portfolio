import { Component, OnInit } from '@angular/core';

// Services
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { TranslateServices } from './services/translate/translate.service';

import * as firebase from 'firebase';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private storage: LocalStorageService, private translate: TranslateServices) {
    this.setPrimaryLanguage();
  }

  ngOnInit(): void {
    // Initialize Firebase
    firebase.initializeApp(environment);
  }

  setPrimaryLanguage() {
    if (this.storage.isActive() === true) {
      this.storage.setLanguage('pt_BR');
      this.translate.setLanguage('pt_BR');
    } else {
      this.translate.setLanguage(this.storage.getLanguage());
    }
  }

}
