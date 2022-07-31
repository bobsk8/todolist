import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';


@NgModule({
  declarations: [ProjectComponent, ProjectCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
