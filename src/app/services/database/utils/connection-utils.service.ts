import { Injectable } from '@angular/core';

// FIREBASE //
import * as firebase from 'firebase';
// FIREBASE //

@Injectable({
  providedIn: 'root'
})

export class ConnectionUtilsService {

  db: firebase.database.Reference;

  constructor() {
    this.db = firebase.database().ref();
  }

  database() {
    return this.db;
  }

}
