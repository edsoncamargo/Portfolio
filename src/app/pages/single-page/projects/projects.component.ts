import { LocalStorageService } from './../../../services/local-storage/local-storage.service';
import { Component, OnInit } from '@angular/core';

// Models
import { Project } from 'src/app/models/projects/project';
import { ProjectImage } from 'src/app/models/projects/project-image';

// Services
import { ProjectsDaoService } from 'src/app/services/database/dao/projects/projects-dao.service';
import { ProjectsStorageService } from 'src/app/services/storage/projects/projects-storage.service';

declare let $: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

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
  fullPaths: Array<String> = [];
  images: Array<ProjectImage> = [];
  // Project image variables

  // Get projects variables
  projects: Array<Project> = [];
  fullPathCover: string = null;
  url: string = null;
  id: string = null;
  image: string = null;
  // Get projects variables

  // Language
  language: string = null;

  // Loadings
  loading: boolean = true;

  constructor(private localStorage: LocalStorageService,
    private projectsDaoService: ProjectsDaoService) { }

  ngOnInit() {
    this.getProjects();
    this.secondModalOpen();
  }

  removingClassModal() {
    $("body").addClass("modal-open");
  }

  getLanguage() {
    return this.language = this.localStorage.getLanguage();
  }

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

        this.loading = false;
        this.projects.push(project);
      }
    });
  }

  getProject(project: Project) {
    this.title = project.title;
    this.titleEn = project.titleEn;
    this.description = project.description;
    this.descriptionEn = project.descriptionEn;
    this.fullPathCover = project.fullPathCover;
    this.url = project.url;
    this.images = project.images;
    this.id = project.id;
    this.removingClassModal();
  }

  getImage(image: string) {
    this.image = image;
  }

  secondModalOpen() {
    $('.modal-zoom').on('hidden.bs.modal', function () {
      $("body").addClass("modal-open");
    });
  }

}
