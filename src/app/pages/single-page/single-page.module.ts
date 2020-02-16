import { AlertModule } from 'ngx-alerts';
import { SharedModule } from './../../services/shared.module';
import { ComponentsModule } from './../../components/components.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './../../components/navbar/navbar.component';
import { MainComponent } from './main/main.component'
import { SinglePageRoutingModule } from './single-page-routing.module';
import { TimelineComponent } from './timeline/timeline.component';
import { SkillsComponent } from './skills/skills.component';
import { ParallaxComponent } from 'src/app/components/parallax/parallax.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { FlagsComponent } from 'src/app/components/flags/flags.component';
import { DarkRoundedComponent } from 'src/app/components/dark-rounded/dark-rounded.component';
import { LightRoundedComponent } from 'src/app/components/light-rounded/light-rounded.component';
import { GrayRoundedComponent } from 'src/app/components/gray-rounded/gray-rounded.component';
import { LoginComponent } from './../dashboard/login/login.component';

const components = [
  MainComponent,
  NavbarComponent,
  HomeComponent,
  AboutMeComponent,
  TimelineComponent,
  SkillsComponent,
  ParallaxComponent,
  ProjectsComponent,
  ContactComponent,
  FooterComponent,
  FlagsComponent,
  DarkRoundedComponent,
  LightRoundedComponent,
  GrayRoundedComponent,
  LoginComponent
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
    SinglePageRoutingModule,
    ComponentsModule,
    SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000, position: 'right' })
  ],
  declarations: [
    components],
  exports: [
    components]
})
export class SinglePageModule { }
