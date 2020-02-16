import { Project } from 'src/app/models/projects/project';
import { Component, OnInit } from '@angular/core';

// Services
import { ProjectsDaoService } from 'src/app/services/database/dao/projects/projects-dao.service'
import { ProjectsStorageService } from 'src/app/services/storage/projects/projects-storage.service';
import { ProjectImage } from 'src/app/models/projects/project-image';

declare let $: any;

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.scss']
})
export class AdminProjectsComponent implements OnInit {

  // Project variables
  // BR variables
  title: string = null;
  description: string = null;
  // BR variables

  // EN variables
  titleEn: string = null;
  descriptionEn: string = null;
  // EN variables
  // Project variables

  // ========================================== //

  // Project image variables
  fullPaths: Array<string> = [];
  images: Array<ProjectImage> = [];
  urlCover = '';
  // Project image variables

  // Storage
  file: File = null;
  files: File[] = [];
  // Storage

  // Get projects variables
  projects: Array<Project> = [];
  fullPathCover: string = null;
  url: string = null;
  id: string = null;
  // Get projects variables

  // Edit
  isEdit = false;
  project: Project = null;

  // Loadings
  loading = true;
  modalLoading = false;

  previousCover: any = null;
  previousImages: any[] = [];

  constructor(private projectsDaoService: ProjectsDaoService,
    private projectsStorageService: ProjectsStorageService) {
    this.getProjects();
  }

  ngOnInit() { }

  async changeEdit(isEdit: boolean) {
    this.isEdit = isEdit;
    this.cleanFiles();

    return true;
  }

  // Add and update
  add() {
    const project: Project = new Project(this.title, this.description, this.url,
      this.fullPathCover, undefined, undefined, this.titleEn, this.descriptionEn);

    this.projectsDaoService.add(project, ((id: string) => {
      this.uploadFileToActivity(id, (response: any) => {
        if (response === true) {
          this.uploadFilesToActivity(id);
        }
      });
    }));
  }

  handleFileInput(event: any) {
    const file: FileList = event.target.files;
    this.file = file.item(0);

    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = (_event) => {
      this.previousCover = reader.result;
    };
  }

  removeCover() {
    this.file = null;
    this.previousCover = null;
    $('.cover').val('');
  }

  removeImage(i: number) {
    this.previousImages.splice(i, 1);
    this.files.splice(i, 1);
    if (this.previousImages.length === 0) {
      this.previousImages = [];
      this.files = [];
      $('.projects').val('');
    }
  }

  uploadFileToActivity(id: string, onResolve: any) {
    if (this.file) {
      this.projectsStorageService.addCover(this.file, id, (fullPath: string, url: string) => {
        this.projectsDaoService.updateCover(fullPath, url, id, (response: any) => {
          onResolve(response);
        });
      });
    } else {
      onResolve(true);
    }
  }

  handleFilesInput(event: any) {
    this.files = [];
    const files: FileList = event.target.files;

    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
      const reader = new FileReader();
      reader.readAsDataURL(files.item(i));
      reader.onload = (_event) => {
        this.previousImages.push(reader.result);
      };
    }

  }

  uploadFilesToActivity(id: string) {
    if (this.files.length > 0) {
      this.projectsStorageService.add(this.files, id, (fullPath: string, url: string) => {
        this.projectsDaoService.addImages(fullPath, id, url, (response: any) => {
          if (response == true) {
            this.modalLoading = false;
            this.cleanObject();
            this.cleanObject();
            this.cleanFiles();
            $('.modal').modal('hide');
          }
        });
      });
    } else {
      this.modalLoading = false;
      this.cleanObject();
      this.cleanObject();
      this.cleanFiles();
      $('.modal').modal('hide');
    }
  }
  // Add and update

  // Get and list
  getProjects() {
    this.projectsDaoService.getProjects((projects: Array<Project>) => {
      this.projects = [];
      for (const project of projects) {
        this.projectsDaoService.getPathImages(project.id, (images: Array<ProjectImage>) => {
          if (images != null) {
            project.images = images;
          }
        });
        this.projects.push(project);
      }
      this.loading = false;
    });
  }

  getProject(project: Project, isEdit: boolean) {
    this.changeEdit(isEdit);
    this.title = project.title;
    this.titleEn = project.titleEn;
    this.description = project.description;
    this.descriptionEn = project.descriptionEn;
    this.fullPathCover = project.fullPathCover;
    this.url = project.url;
    this.images = project.images;
    this.id = project.id;
    this.urlCover = project.urlCover;
    this.previousCover = this.urlCover;
    this.project = project;
  }

  edit() {
    this.modalLoading = true;
    this.project = new Project
      (this.title, this.description, this.url, this.fullPathCover, this.id, this.images, this.titleEn, this.descriptionEn, this.urlCover);
    this.projectsDaoService.edit(this.project, (isEdited: any) => {
      if (isEdited == true) {
        this.uploadFileToActivity(this.id, (response: any) => {
          if (response == true) {
            this.uploadFilesToActivity(this.id);
          }
        });
      }
    });
  }

  deleteImage(image: ProjectImage, i: number) {
    this.projectsDaoService.deleteImage(image, this.id, (response: boolean) => {
      if (response == true) {
        this.images.splice(i, 1);
        this.cleanFiles();
      }
    });
  }

  deleteProject() {
    this.modalLoading = true;

    this.projectsDaoService.deleteEverythingFromTheProject(this.project, (response: any) => {
      if (response) {
        this.cleanFiles();
        this.modalLoading = false;
      }
    });
  }

  cleanObject() {
    if (this.project != null) {
      this.project.reset();
    }
  }

  cleanFiles() {
    this.file = null;
    this.files = [];
    $('.file').val('');
    $('.file').val('');
    this.previousCover = null;
    this.previousImages = [];
  }

}
