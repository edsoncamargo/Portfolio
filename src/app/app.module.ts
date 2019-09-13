// MODULES //
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TypingAnimationDirective } from 'angular-typing-animation'
import { RecaptchaModule } from 'ng-recaptcha';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';

// FIREBASE //
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

// PAGES AND COMPONENTS //
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/single-page/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/single-page/home/home.component';
import { AboutMeComponent } from './pages/single-page/about-me/about-me.component';
import { SkillsComponent } from './pages/single-page/skills/skills.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { ProjectsComponent } from './pages/single-page/projects/projects.component';
import { ContactComponent } from './pages/single-page/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlagsComponent } from './components/flags/flags.component';
import { DarkRoundedComponent } from './components/dark-rounded/dark-rounded.component';
import { LightRoundedComponent } from './components/light-rounded/light-rounded.component';

// ADMIN PAGES //
import { LoginComponent } from './pages/dashboard/login/login.component';

// ADMIN PAGES AND ADMIN COMPONENTS //
import { AdminMainComponent } from './pages/dashboard/admin-main/admin-main.component';
import { AdminHomeComponent } from './pages/dashboard/admin-home/admin-home.component';

// SERVICES //
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { TranslateServices } from './services/translate/translate.service';
import { AuthService } from './services/auth/auth.service';
import { GuardsService } from './services/guards/guards.service';
import { ConnectionUtilsService } from './services/database/utils/connection-utils.service';
import { AdminAboutComponent } from './pages/dashboard/admin-about/admin-about.component';
import { AdminProjectsComponent } from './pages/dashboard/admin-projects/admin-projects.component';
import { GuardsErrorComponent } from './pages/dashboard/guards-error/guards-error.component';
import { NotFoundComponent } from './pages/others/not-found/not-found.component';
import { LdsFacebookComponent } from './components/loadings/lds-facebook/lds-facebook.component';
import { LdsFacebookBlueComponent } from './components/loadings/lds-facebook-blue/lds-facebook-blue.component';
import { EllipsisPipe } from './pipes/ellipsis/ellipsis.pipe';
import { SkillIconsPipe } from './pipes/skill-classes/skill-icons.pipe';
import { GrayRoundedComponent } from './components/gray-rounded/gray-rounded.component';
import { SkillColorsPipe } from './pipes/skill-classes/skill-colors.pipe';
import { AdminSkillsComponent } from './pages/dashboard/admin-skills/admin-skills.component';
import { NotFoundImagePipe } from './pipes/not-found-image/not-found-image.pipe';
import { TimelineComponent } from './pages/single-page/timeline/timeline.component';
import { AdminTimelineComponent } from './pages/dashboard/admin-timeline/admin-timeline.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    ParallaxComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    FlagsComponent,
    DarkRoundedComponent,
    LightRoundedComponent,
    TypingAnimationDirective,
    LoginComponent,
    AdminMainComponent,
    AdminHomeComponent,
    AdminAboutComponent,
    AdminProjectsComponent,
    GuardsErrorComponent,
    NotFoundComponent,
    LdsFacebookComponent,
    LdsFacebookBlueComponent,
    EllipsisPipe,
    SkillIconsPipe,
    GrayRoundedComponent,
    SkillColorsPipe,
    AdminSkillsComponent,
    NotFoundImagePipe,
    TimelineComponent,
    AdminTimelineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    RecaptchaModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000, position: 'right' }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [HttpClient, LocalStorageService, TranslateServices, AuthService, GuardsService, ConnectionUtilsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
