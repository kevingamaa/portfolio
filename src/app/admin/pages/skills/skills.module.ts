import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SkillNeComponent } from './skill-ne/skill-ne.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SkillsRoutingModule } from './skills-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SkillsComponent, 
    SkillNeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SkillsRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class SkillsModule { }
