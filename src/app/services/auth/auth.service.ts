import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";

// FIREBASE //
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

// SERVICES //
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // Auth
  auth: firebase.auth.Auth;

  // JWT
  token: string = "";
  tokenAndUID: any;

  constructor(angularFireAuth: AngularFireAuth,
    private router: Router,
    private storage: LocalStorageService) {
    this.auth = angularFireAuth.auth; // Query da autenticação para obter todos as funções da auth do firebase
  }

  login(email: string, password: string) {
    return new Promise((resolve, promiseError) => {
      this.auth.signInWithEmailAndPassword(email, password).then(response => {
        this.auth.currentUser.getIdToken().then((token: string) => {
          this.token = token;
          this.storage.setToken(this.token);
          this.router.navigate(['/admin/home']);
        });
        resolve(response);
      }).catch(error => {
        promiseError(error);
      });
    })
  }

  logout() {
    this.auth.signOut().then(() => {
      this.token = "";
      this.storage.removeUID();
      this.storage.removeToken();
      this.router.navigate(['/login']);
    }).catch(error => {
      console.log(error);
    });
  }

  isAuth(): boolean {
    try {
      this.tokenAndUID = jwt_decode(this.storage.getToken());
    } catch (error) {
      this.storage.setAuthError(error.message);
    }

    if (this.token == "" && this.storage.getToken() != null) {
      this.token = this.storage.getToken();
    }

    return this.token !== "" && this.tokenAndUID.user_id == this.storage.getUID();
  }

}
