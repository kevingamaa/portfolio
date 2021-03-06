import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebsiteComponent } from './website.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';

const routes: Routes = [
  {
    path: '', component: WebsiteComponent,
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'home'

      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'cv', component: CvComponent
      },
      {
        path: 'not-found', component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
