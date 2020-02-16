import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/others/not-found/not-found.component';

const routes: Routes = [
  { path: '', loadChildren: './pages/single-page/single-page.module#SinglePageModule' },
  { path: 'admin', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
