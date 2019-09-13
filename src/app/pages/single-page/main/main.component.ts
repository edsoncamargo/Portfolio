import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private title: Title,
    private translate: TranslateService) { }

  ngOnInit() {
    // console.log(this.translate.translations);
    this.title.setTitle("Portfólio - Edson Camargo Menezes, Desenvolvedor Web");
  }

}
