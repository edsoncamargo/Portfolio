import { Project } from './../../../models/projects/project';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

// Models
import { ProjectImage } from 'src/app/models/projects/project-image';

@Injectable({
  providedIn: 'root'
})
export class ProjectsStorageService {

  // Storage reference
  storage = firebase.storage().ref();

  // Paths
  PROJECTS = 'projects/';
  COVER = 'covers/'
  IMAGES = 'images/';

  constructor() { }

  add(files: Array<File>, id: string, onResolve: any) {
    for (const file of files) {
      this.storage.child(this.PROJECTS).child(this.IMAGES).child(id).child(file.name).put(file).then((snapshot) => {
        this.storage.child(snapshot.metadata.fullPath).getDownloadURL().then((url) => {
          onResolve(snapshot.metadata.fullPath, url);
        });
      });
    }
  }

  addCover(file: File, id: string, onResolve: any) {
    this.storage.child(this.PROJECTS).child(this.COVER).child(id).child("cover").put(file).then((snapshot) => {
      this.storage.child(snapshot.metadata.fullPath).getDownloadURL().then((url: string) => {
        onResolve(snapshot.metadata.fullPath, url);
      });
    });
  }

  getDownloadImages(path: string, onResolve: any) {
    this.storage.child(path).getDownloadURL().then((url) => {
      onResolve(url);
    });
  }

  deleteImage(image: ProjectImage, onResolve: any) {
    this.storage.child(image.fullPath).delete().then(() => {
      onResolve(true);
    });
  }

  deleteEverythingFromTheProject(project: Project, onResolve: any) {
    let count = 0;
    this.storage.child(project.fullPathCover).delete().then(() => {
      for (const image of project.images) {
        this.storage.child(image.fullPath).delete().then(() => {
          count++;
          if (count >= project.images.length) {
            onResolve(true);
          }
        });
      }
    });
  }

}
