import { HasImagePipe } from './../pipes/has-image.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillColorsPipe } from './../pipes/skill-classes/skill-colors.pipe';
import { NotFoundImagePipe } from './../pipes/not-found-image/not-found-image.pipe';
import { SkillIconsPipe } from './../pipes/skill-classes/skill-icons.pipe';
import { EllipsisPipe } from './../pipes/ellipsis/ellipsis.pipe';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecaptchaModule } from 'ng-recaptcha';
import { FormsModule } from '@angular/forms';
import { ConnectionUtilsService } from './database/utils/connection-utils.service';
import { GuardsService } from './guards/guards.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TranslateServices } from './translate/translate.service';
import { LocalStorageService } from './local-storage/local-storage.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n', '.json');
}

const pipes = [
  EllipsisPipe,
  SkillIconsPipe,
  NotFoundImagePipe,
  SkillColorsPipe,
  HasImagePipe
];

const modules = [
  CommonModule,
  HttpClientModule,
  SharedRoutingModule,
  FormsModule,
  RecaptchaModule
];

@NgModule({
  imports: [
    modules
  ],
  declarations: [
    pipes
  ],
  exports: [
    pipes,
    modules]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [HttpClient, LocalStorageService, TranslateServices, AuthService, GuardsService, ConnectionUtilsService]
    };
  }
}
