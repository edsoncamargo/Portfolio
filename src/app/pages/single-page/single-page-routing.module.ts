import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { LoginComponent } from './../dashboard/login/login.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'about', redirectTo: '', pathMatch: 'full' },
  { path: 'projects', redirectTo: '', pathMatch: 'full' },
  { path: 'contact', redirectTo: '', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinglePageRoutingModule { }
