import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SharedModule } from './services/shared.module';
import { ComponentsModule } from './components/components.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GuardsErrorComponent } from './pages/dashboard/guards-error/guards-error.component';
import { NotFoundComponent } from './pages/others/not-found/not-found.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n', '.json');
}

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  SharedModule.forRoot(),
  AngularFireModule.initializeApp(environment),
  AngularFirestoreModule,
  AngularFireAuthModule,
  AngularFireStorageModule,
  ComponentsModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  })
];

const components = [
  AppComponent,
  GuardsErrorComponent,
  NotFoundComponent
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    modules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
