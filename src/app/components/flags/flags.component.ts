import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { TranslateServices } from './../../services/translate/translate.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss']
})
export class FlagsComponent implements OnInit {

  // Actived language
  languageActived: string = "";

  constructor(private storage: LocalStorageService,
    private translate: TranslateServices) { }

  ngOnInit() { }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.languageActived = this.storage.getLanguage();
  }

  switchLanguage(language: string) {
    this.storage.setLanguage(language);
    this.translate.setLanguage(language);
  }

}
