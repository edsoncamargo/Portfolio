import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { AdminSkillsComponent } from './admin-skills/admin-skills.component';
import { AdminTimelineComponent } from './admin-timeline/admin-timeline.component';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminMainComponent } from './admin-main/admin-main.component';

import { GuardsService } from './../../services/guards/guards.service';

const routes: Routes = [{
  path: '',
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
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
