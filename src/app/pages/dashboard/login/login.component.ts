import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare let $: any;

// SERVICES //
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalStorageService } from '../../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  // Credentials
  email = '';
  password = '';

  // Response
  error = '';

  // Loading
  loading = false;

  constructor(private auth: AuthService,
    private storage: LocalStorageService,
    private router: Router,
    private title: Title) {
    this.isLogged();
  }

  ngOnInit(): void {
    this.title.setTitle('Login para dashboard - Edson Camargo Menezes');
  }

  login(): void {
    this.loading = true;
    this.auth.login(this.email, this.password).then((response: any) => {
      this.storage.setUID(response.user.uid);
      this.loading = false;
    }).catch((error) => {
      this.error = JSON.stringify(error.message);
      this.loading = false;
      $('#errorModal').modal('show');
    });
  }

  isLogged(): void {
    if (this.auth.isAuth()) {
      this.router.navigateByUrl('/admin');
    } else {
      this.storage.removeAuthError();
      this.storage.removeToken();
      this.storage.removeUID();
    }
  }

}
