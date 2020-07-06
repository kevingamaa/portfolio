import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WebsiteComponent} from './website.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component: WebsiteComponent
  },
  {
    path: 'not-found', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
