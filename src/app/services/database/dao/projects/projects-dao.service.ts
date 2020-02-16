import { Injectable } from '@angular/core';

// Models
import { Project } from 'src/app/models/projects/project';
import { ProjectImage } from 'src/app/models/projects/project-image';

// Services
import { ConnectionUtilsService } from '../../utils/connection-utils.service';
import { ProjectsStorageService } from 'src/app/services/storage/projects/projects-storage.service';

@Injectable({
  providedIn: 'root'
})

export class ProjectsDaoService {

  // Paths
  PROJECTS = 'projects/';
  IMAGES = 'images/';
  BR = 'br/';

  id: string = undefined;

  constructor(private db: ConnectionUtilsService,
    private projectStorageService: ProjectsStorageService) {
  }

  add(project: Project, onResolve: any) {
    project.parse();
    // Unique id
    const id = this.db.database().push().key;
    // Setting portuguese
    this.db.database().child(this.PROJECTS).child(id).update({
      title: project.title,
      titleEn: project.titleEn,
      description: project.description,
      descriptionEn: project.descriptionEn,
      url: project.url,
      fullPathCover: project.fullPathCover,
      id: id
    });
    onResolve(id);
  }

  updateCover(fullPath: string, url: string, id: string, onResolve: any) {
    this.db.database().child(this.PROJECTS).child(id).update({
      fullPathCover: fullPath,
      urlCover: url
    }).then(() => {
      onResolve(true);
    });
  }

  addImages(fullPath: string, project: string, url: string, onResolve: any) {
    // Unique id
    const id = this.db.database().push().key;
    this.db.database().child(this.IMAGES).child(project).child(id).update({
      id: id,
      fullPath: fullPath,
      url: url
    }).then(() => {
      onResolve(true);
    })
  }

  getProjects(onResolve: any) {
    this.db.database().child(this.PROJECTS).on('value', (snapshot) => {
      const projects: Array<Project> = [];
      const data = snapshot.val();
      for (const id in data) {
        if (data.hasOwnProperty(id)) {
          projects.push(data[id]);
        }
      }
      onResolve(projects);
    });
  }

  getPathImages(id: string, onResolve: any) {
    this.db.database().child(this.IMAGES).child(`${id}/`).on('value', (snapshot) => {
      const data = snapshot.val();
      const images: Array<ProjectImage> = [];
      let count = 0;

      if (data != null) {
        for (const value in data) {
          if (value) {
            images.push(data[value]);
            count++;
            if (count >= Object.values(data).length) {
              onResolve(images);
            }
          }
        }
      } else {
        onResolve(null);
      }
    });
  }

  edit(project: Project, onResolve: any) {
    project.parse();

    this.db.database().child(this.PROJECTS).child(project.id).update({
      title: project.title,
      titleEn: project.titleEn,
      description: project.description,
      descriptionEn: project.descriptionEn,
      url: project.url,
      fullPathCover: project.fullPathCover,
      id: project.id
    }).then(() => {
      onResolve(true);
    });
  }

  deleteImage(image: ProjectImage, id: string, onResolve: any) {
    this.db.database().child(this.IMAGES).child(`${id}/`).child(image.id).remove(() => {
      this.projectStorageService.deleteImage(image, (response: boolean) => {
        onResolve(response);
      });
    })
  }

  deleteEverythingFromTheProject(project: Project, onResolve: any) {
    this.projectStorageService.deleteEverythingFromTheProject(project, (response: any) => {
      if (response == true) {
        this.db.database().child(this.PROJECTS).child(`${project.id}/`).remove().then(() => {
          this.db.database().child(this.IMAGES).child(`${project.id}/`).remove().then(() => {
            onResolve(true);
          });
        });
      }
    });
  }

}
