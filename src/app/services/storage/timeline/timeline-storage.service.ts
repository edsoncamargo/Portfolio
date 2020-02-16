import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class TimelineStorageService {

  // Storage reference
  storage = firebase.storage().ref();

  // Paths
  COMPANY = 'company/';

  constructor() { }

  addCompanyPic(file: File, id: string, onResolve: any) {
    this.storage.child(this.COMPANY + id.concat('/') + file.name).put(file).then((snapshot) => {
      onResolve(snapshot);
    });
  }

  getCompanyPic(path: string, onResolve: any) {
    this.storage.child(path).getDownloadURL().then((url) => {
      onResolve(url);
    });
  }

  deleteCompanyPic(fullPath: string): Promise<any> {
    return this.storage.child(fullPath).delete();
  }

}
