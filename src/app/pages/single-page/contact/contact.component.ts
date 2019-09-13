import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Services
import { AlertService } from 'ngx-alerts';

declare let $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  subject: string = '';
  name: string = '';
  email: string = '';
  text: string = '';
  captcha: boolean = false;

  sending: boolean = false;

  constructor(private http: HttpClient, private alert: AlertService) {

  }

  ngOnInit() {

  }

  resolved(captchaResponse: string) {
    if (captchaResponse) {
      this.captcha = true;
    } else {
      this.captcha = false;
    }
  }

  send() {
    this.sending = true;
    let body = {
      "subject": this.subject,
      "name": this.name,
      "from": this.email,
      "text": this.text
    }

    this.http.post("https://us-central1-portfolio-hunter.cloudfunctions.net/email", body).subscribe(() => {
      this.sending = false;
      this.alert.success('E-mail enviado com sucesso.');
    }, () => {
      this.sending = false;
      this.alert.warning('Não foi possível enviar e-mail. Tente novamente!');
    });
  }

}
