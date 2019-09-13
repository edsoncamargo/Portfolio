import { AdminProjectsComponent } from './pages/dashboard/admin-projects/admin-projects.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/single-page/main/main.component';

import { AdminMainComponent } from './pages/dashboard/admin-main/admin-main.component';
import { LoginComponent } from './pages/dashboard/login/login.component';
import { AdminHomeComponent } from './pages/dashboard/admin-home/admin-home.component';

import { GuardsService } from './services/guards/guards.service';
import { AdminAboutComponent } from './pages/dashboard/admin-about/admin-about.component';
import { GuardsErrorComponent } from './pages/dashboard/guards-error/guards-error.component';
import { NotFoundComponent } from './pages/others/not-found/not-found.component';
import { SkillsComponent } from './pages/single-page/skills/skills.component';
import { TimelineComponent } from './pages/single-page/timeline/timeline.component';
import { AdminSkillsComponent } from './pages/dashboard/admin-skills/admin-skills.component';
import { AdminTimelineComponent } from './pages/dashboard/admin-timeline/admin-timeline.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'access-denied',
    component: GuardsErrorComponent
  }, {
    path: 'admin',
    component: AdminMainComponent,
    canActivate: [GuardsService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, {
        path: 'home',
        component: AdminHomeComponent,
        canActivate: [GuardsService]
      }, {
        path: 'about',
        component: AdminAboutComponent,
        canActivate: [GuardsService]
      },
      {
        path: 'timeline',
        component: AdminTimelineComponent,
        canActivate: [GuardsService]
      },
      {
        path: 'skills',
        component: AdminSkillsComponent,
        canActivate: [GuardsService]
      },
      {
        path: 'posts',
        component: AdminProjectsComponent,
        canActivate: [GuardsService]
      },
    ]
  },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'about', redirectTo: '', pathMatch: 'full' },
  { path: 'projects', redirectTo: '', pathMatch: 'full' },
  { path: 'contact', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
