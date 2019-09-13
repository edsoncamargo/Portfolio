import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  // TRANSLATE //
  ACTIVE: string = 'active';
  LANGUAGE: string = 'language';
  // TRANSLATE //

  // LOGIN //
  UID: string = "auth:uid.edsoncamargo.com.br";
  // LOGIN //

  // AUTH //
  TOKEN: string = "auth:token.edsoncamargo.com.br"
  // AUTH //

  // AUTH ERRO //
  AUTH_ERROR: string = "auth:response-admin-error.edsoncamargo.com.br";
  // AUTH ERRO //
  constructor() { }

  isActive(): boolean {
    if (this.getActive() == null) {
      this.setActive();
      return true;
    }

    return false;
  }

  // TRANSLATE //
  setActive(): void {
    localStorage.setItem(this.ACTIVE, 'true');
  }

  getActive(): string {
    const ACTIVE = localStorage.getItem(this.ACTIVE);
    return ACTIVE;
  }

  setLanguage(language: string): void {
    localStorage.setItem(this.LANGUAGE, language);
  }

  getLanguage() {
    const LANGUAGE = localStorage.getItem(this.LANGUAGE);
    return LANGUAGE;
  }
  // TRANSLATE //

  // LOGIN //
  setUID(UID: string): void {
    localStorage.setItem(this.UID, UID);
  }

  getUID(): string {
    return localStorage.getItem(this.UID);
  }

  removeUID() {
    localStorage.removeItem(this.UID);
  }
  // LOGIN //

  // AUTH //
  setToken(token: string) {
    localStorage.setItem(this.TOKEN, token);
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN);
  }

  removeToken() {
    localStorage.removeItem(this.TOKEN);
  }
  // AUTH //

  // AUTH ERROR //
  setAuthError(error) {
    localStorage.setItem(this.AUTH_ERROR, error);
  }

  getAuthError(): string {
    return localStorage.getItem(this.AUTH_ERROR);
  }

  removeAuthError() {
    localStorage.removeItem(this.AUTH_ERROR);
  }
  // AUTH ERROR //
}
