import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDetailRoutingModule } from './project-detail-routing.module';
import { ProjectDetailComponent } from './project-detail.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProjectDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProjectDetailRoutingModule
  ]
})
export class ProjectDetailModule { }
