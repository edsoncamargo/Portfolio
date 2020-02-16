import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from './../../services/shared.module';
import { ComponentsModule } from './../../components/components.module';

import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminTimelineComponent } from './admin-timeline/admin-timeline.component';
import { AdminSkillsComponent } from './admin-skills/admin-skills.component';
import { AdminMainComponent } from './admin-main/admin-main.component';

import { GuardsService } from './../../services/guards/guards.service';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

export const components = [
  AdminMainComponent,
  AdminHomeComponent,
  AdminAboutComponent,
  AdminTimelineComponent,
  AdminSkillsComponent,
  AdminProjectsComponent
];

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n', '.json');
}
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule.forRoot(),
    ComponentsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    components
  ],
  declarations: [components],
  providers: [GuardsService]
})
export class DashboardModule { }
