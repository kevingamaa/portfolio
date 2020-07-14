import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './skills.component';
import { SkillNeComponent } from './skill-ne/skill-ne.component';


const routes: Routes = [
  {
    path: '', component: SkillsComponent
  },
  {
    path: 'new', component: SkillNeComponent
  },
  {
    path: 'edit/:id', component: SkillNeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
