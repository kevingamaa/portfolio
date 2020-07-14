import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {
        path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'projects', loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule)
      },
      {
        path: 'skills', loadChildren: () => import('./pages/skills/skills.module').then(m => m.SkillsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
