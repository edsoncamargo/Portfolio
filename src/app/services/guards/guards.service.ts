import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

// SERVICES //
import { AuthService } from '../auth/auth.service';
import { LocalStorageService } from './../local-storage/local-storage.service';
import { Title } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})

export class GuardsService implements CanActivate {

  // Auth error
  AUTH_ERROR_ONE = 'Invalid token specified';
  getError = "";

  // JWT
  tokenAndUID: any;

  constructor(private auth: AuthService,
    private router: Router,
    private storage: LocalStorageService,
    private title: Title) { }

  // Função utilizada para verificar se o usuário pode ter acesso as rotas do painel administrativo
  canActivate(): boolean {
    /* Retorna verdadeiro caso o usuário esteja autenticado 
     * ou retorna falso, caso o usuário não esteja autenticado (fazendo com que ele não tenha acesso ao painel administrativo) */
    try {
      this.getError = '';
      this.tokenAndUID = jwt_decode(this.storage.getToken());
    } catch (error) {
      this.storage.setAuthError(error.message);
    }

    if (this.storage.getAuthError() != null) {
      this.getError = this.storage.getAuthError();
    }

    if (this.getError.includes(this.AUTH_ERROR_ONE) ||
      this.storage.getUID() === '' ||
      this.storage.getToken() === '' ||
      this.storage.getUID() !== this.tokenAndUID.user_id) {
      this.router.navigate(['/access-denied']);
    } else {
      if (!this.auth.isAuth()) {
        this.router.navigate(['/login']);
      } else {
        this.title.setTitle('Dashboard - Edson Camargo Menezes');
        return this.auth.isAuth();
      }
    }
  }

}
