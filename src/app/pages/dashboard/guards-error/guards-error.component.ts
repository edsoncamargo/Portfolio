import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { LocalStorageService } from '../../../services/local-storage/local-storage.service';
import { Router } from '@angular/router';

// SERVICES //
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guards-error',
  templateUrl: './guards-error.component.html',
  styleUrls: ['./guards-error.component.scss']
})

export class GuardsErrorComponent implements OnInit {

  time: number = 5;
  timer: any;

  constructor(private router: Router,
    private storage: LocalStorageService,
    private title: Title,
    private translate: TranslateService) {
    this.time = 5;
  }

  ngOnInit() {
    this.title.setTitle("Erro: Acesso negado - Edson Camargo Menezes");
    this.storage.removeToken();
    this.storage.removeUID();
    this.storage.removeAuthError();

    this.timer = setInterval(() => {
      if (this.time >= 0) {
        this.time--;
      } else if (this.time < 0) {
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

}
